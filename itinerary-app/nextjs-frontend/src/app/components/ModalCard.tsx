import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Card, Image, Text, Badge, Button, Group ,Modal,ScrollArea, Box} from '@mantine/core';
import  MultiSelect  from './MultiSelect';
import { Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import { Plan } from '../interface';
import { Input } from '@mantine/core';
import '@mantine/dropzone/styles.css';
import { useState } from 'react';
import { Dropzone } from '@mantine/dropzone';
import { rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import {  DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { SimpleGrid } from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';

interface ModalCardProps{
    handleChangePlan: (newPlanData: Plan) => void
    plan:Plan
    opened:boolean
    open:(()=>void)
    close:(()=>void)
}
const ModalCard:React.FC<ModalCardProps>  = ({
      handleChangePlan,
      plan,
      opened,
      open,
      close
    }) => {
    const widthSize:number=400
    const [titleValue, setTitleValue] = useState<string|null>(plan!==null ? plan.title: '');
    const [memoValue, setMemoValue] = useState<string|null>(plan!==null ? plan.description: '');
    const [tagValue, setTagValue] = useState<string[]>(plan!==null ? plan.tags : ['']);
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const [imageValue, setimageValue] = useState<string[]>(plan!==null ? plan.images : []);
    // setInterval(() => {
    //   console.log(
    //     files
    //   );
    // }, 5000);
    const onSavePlan =(plan:Plan)=>{
      const imageUrls:string[] = [...imageValue, ...files.map(file => URL.createObjectURL(file))];
      setimageValue(imageUrls);
      console.log(imageValue)
      const updatePlan:Plan={...plan,
        title:titleValue,
        description:memoValue,
        tags:tagValue,
        images:imageValue
        }
      if(plan===null){
        console.log(imageValue)
        const defaultPlan: Plan = {
          id: uuidv4(),
          title: titleValue,
          images: imageValue,
          description: memoValue,
          fromTime:new Date("00:00"),
          toTime:new Date("00:00"),
          tags: tagValue,
          resultArea:false
        };
        console.log("default")
        handleChangePlan(defaultPlan)
      }
      else{
        console.log("update")
        console.log(updatePlan)
        handleChangePlan(updatePlan)
      }
    }
  return (
    <>
        <Modal opened={opened} onClose={close}>
          <Card className=' w-72 mx-auto bg-slate-600 ' h={500} w={widthSize} shadow="sm" padding="sm" radius="md">
            <Card.Section className=' relative'>
                <div className='absolute w-full h-full'>
                <Carousel withIndicators height={150} loop>
                {
                  plan && imageValue.map((image) => (
                      <Carousel.Slide key={image}>
                      <Image
                          src={image}
                          style={{ height: "100%", objectFit: "contain" }}
                          alt="Norway"
                      />
                      </Carousel.Slide>
                  ))
                  }
                  {
                    files.map((file,index)=>(
                      <Carousel.Slide key={index}>
                        <Image
                          src={URL.createObjectURL(file)}
                          style={{ height: "100%", objectFit: "contain" }}
                          alt="Norway"
                        />
                      </Carousel.Slide>
                    ))
                  }
                </Carousel>
                </div>
                <div className=' opacity-70'>
                <Dropzone
                      onDrop={setFiles}
                      maxSize={5 * 1024 ** 2}
                      accept={IMAGE_MIME_TYPE}
                    >
                    <Group justify="center" style={{ pointerEvents: 'none' }}>
                      <Dropzone.Accept>
                        <IconUpload
                          style={{color: 'var(--mantine-color-blue-6)' }}
                          className='w-full h-full'
                          stroke={1.5}
                        />
                      </Dropzone.Accept>
                      <Dropzone.Reject>
                        <IconX
                          style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                          stroke={1.5}
                        />
                      </Dropzone.Reject>
                      <Dropzone.Idle>
                        <IconPhoto
                          style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                          stroke={1.5}
                        />
                      </Dropzone.Idle>

                      <div>
                        <Text size="xl" inline>
                          Drag images here or click to select files
                        </Text>
                        <Text size="sm" c="dimmed" inline mt={7}>
                          Attach as many files as you like, each file should not exceed 5mb
                        </Text>
                      </div>
                    </Group>
                  </Dropzone>
                </div>
            </Card.Section>

            <Group justify="center" mt="lg" mb="lg">
              <Text fw={500}>
                <Input value={titleValue} onChange={(event) => setTitleValue(event.currentTarget.value)} defaultValue={plan ? plan.title : "new title"} size="lg" w={widthSize-20} placeholder="Enter title"/>
              </Text>
              <ScrollArea w={widthSize-100} style={{"height":"fit-content"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="x">
              {/* <div className='w-full flex flex-nowrap overflow-auto mb-2'> */}
                <MultiSelect w={widthSize-150} tagValue={tagValue} setTagValue={setTagValue} />
              {/* </div> */}
              </ScrollArea>
            </Group>
            <ScrollArea h={120} scrollbarSize={5} scrollHideDelay={0} scrollbars="y">
            <Text size="lg" c="dimmed" h={120}>
                <Textarea 
                  value={memoValue}
                  onChange={(event) => setMemoValue(event.currentTarget.value)}
                  // defaultValue={plan != null ? plan.description : "new memo"}
                  placeholder="Input placeholder"
                />
            </Text>
            </ScrollArea>

            <Button onClick={
              ()=>{
                close()
                onSavePlan(plan)
              }} color="blue" fullWidth mt="md" radius="md">
              保存
            </Button>
          </Card>
          </Modal>
    </>
  )
}

export default ModalCard