"use client"
import { Card, Image, Text, Badge, Button, Group ,Modal} from '@mantine/core';
import { Textarea } from '@mantine/core';
import 'dayjs/locale/ja';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';
import {useState,useRef} from 'react'
import { ScrollArea, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css'
import { MultiSelectCreatable } from './MultiSelect';
import { ActionIcon, rem } from '@mantine/core';
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import dayjs from 'dayjs';
const CardCom = ({ id="", title="", images = [], description="" ,fromTime=new Date(),toTime=new Date()}) => {
  function getTimeString(date:Date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
    const newDate:Date=new Date()
    const [opened, { open, close }] = useDisclosure(false);
    const [fromValue, setFromValue] = useState<Date | null>(null);
    const [toValue, setToFromValue] = useState<Date | null>(null);
    const fromRef = useRef<HTMLInputElement>(null);
    const toRef = useRef<HTMLInputElement>(null);

    const newFromTime:string = getTimeString(fromTime)
    const newToTime:string = getTimeString(toTime)

    const fromPickerControl = (
      <ActionIcon variant="subtle" color="gray" onClick={() => fromRef.current?.showPicker()}>
        <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      </ActionIcon>
    );
    const toPickerControl = (
      <ActionIcon variant="subtle" color="gray" onClick={() => toRef.current?.showPicker()}>
        <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      </ActionIcon>
    );
    return (
        <>
          <Modal opened={opened} onClose={close}>
          <Card className=' w-72 mx-auto bg-slate-600 ' shadow="sm" padding="sm" radius="md">
            <Card.Section>
              <Carousel withIndicators height={150} loop>
              {images?.map((image)=>{
                  //return文が必要になる値理由が分からない
                  return (
                    <Carousel.Slide key={image}>
                      <Image
                        src={image}
                        style={[{"height":"100%"},{"objectFit":"contain"}]}
                        alt="Norway"
                      />
                    </Carousel.Slide>
                  );
                })}
              </Carousel>
            </Card.Section>

            <Group justify="start" mt="sm" mb="sm">
              <Text fw={500}>
              <input type="email" defaultValue={title} className="peer py-3 px-2 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter title"/>
              </Text>
              <ScrollArea w={300} style={{"height":"fit-content"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="x">
              <div className='w-full flex flex-nowrap overflow-auto mb-2'>
                <MultiSelectCreatable/>
              </div>
              </ScrollArea>
            </Group>
            <ScrollArea h={10} scrollbarSize={5} scrollHideDelay={0} scrollbars="y">
            <Text size="md" c="dimmed" h={10}>
                <Textarea 
                  style={{"height":"10px"}}
                  defaultValue={"メモ：With Fjord Tours you can explore more of the magical fjord landscapes with tours andactivities on and around the fjords of Norway"}
                  placeholder="Input placeholder"
                />
            </Text>
            </ScrollArea>

            <Button onClick={close} color="blue" fullWidth mt="md" radius="md">
              保存
            </Button>
          </Card>
          </Modal>
          <div>
            <Card  className='w-72 m-2 bg-slate-600 cursor-pointer' id={id} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
              <DatesProvider  settings={{ locale: 'ja', firstDayOfWeek: 0, weekendDays: [0], timezone: 'Asia/Tokyo' }}>
              <div className='flex justify-around'>
                <TimeInput  defaultValue={newFromTime} onChange={(event) => setFromValue(event.currentTarget.valueAsDate)} className='p-1' style={{width:"100px"}} label="" ref={fromRef} rightSection={fromPickerControl} />
                <span>-</span>
                <TimeInput defaultValue={newToTime} onChange={(event) => setToFromValue(event.currentTarget.valueAsDate)} className='p-1' style={{width:"100px"}} label="" ref={toRef} rightSection={toPickerControl} />
              </div>
            </DatesProvider>
                <Carousel withIndicators height={150} loop>
                {images?.map((image)=>{
                  //return文が必要になる値理由が分からない
                  return (
                    <Carousel.Slide key={image}>
                      <Image
                        src={image}
                        style={[{"height":"100%"},{"objectFit":"contain"}]}
                        alt="Norway"
                      />
                    </Carousel.Slide>
                  );
                })}
                </Carousel>
              </Card.Section>

              <Group justify="start" mt="sm" mb="sm">
                <Text fw={500}>{title}</Text>
                <ScrollArea w={300} style={{"height":"fit-content"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="x">
                <div className=' w-full flex flex-nowrap overflow-auto mb-2'>
                  <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                  <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                  <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                  <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                  <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                  <Badge className='mr-2 min-w-fit' color="pink">On Sale</Badge>
                </div>
                </ScrollArea>
              </Group>

              <Text size="sm" c="dimmed" h={20} className='truncate'>
                {description}
              </Text>

              <Button onClick={open} color="blue" fullWidth mt="md" radius="md">
                編集
              </Button>
            </Card>
            </div>
          
        </>
    );
  };
  
  export default CardCom;
  