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
    // setInterval(()=>console.log(titleValue),1000)
    const onSavePlan =(plan:Plan)=>{
      const updatePlan:Plan={...plan,
        title:titleValue,
        description:memoValue,
        tags:tagValue}
      if(plan===null){
        const defaultPlan: Plan = {
          id: uuidv4(),
          title: titleValue,
          images: [''],
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
            <Card.Section>
              <Carousel withIndicators height={150} loop>
              {/* {
                plan && plan.images?.map((image) => (
                    <Carousel.Slide key={image}>
                    <Image
                        src={image}
                        style={{ height: "100%", objectFit: "contain" }} // 修正: スタイルをオブジェクトで直接指定
                        alt="Norway"
                    />
                    </Carousel.Slide>
                ))
                } */}
                <Dropzone loading onDrop={() => {}}></Dropzone>
              </Carousel>
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