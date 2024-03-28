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
import { Dispatch, SetStateAction } from "react";
import { Plan } from '../../interface';
import ModalCard from './ModalCard';

interface CardComProps {
  planData: Plan;
  handleChangePlan: (newPlanData: Plan) => void;
}
const CardCom: React.FC<CardComProps> = ({planData,handleChangePlan}) => {
  
  function getTimeString(date:Date|null) {
    if(date==null) return "00:00"
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
    const newDate:Date=new Date()
    const [opened, { open, close }] = useDisclosure(false);
    const [fromValue, setFromValue] = useState<Date | null>(null);
    const [toValue, setToFromValue] = useState<Date | null>(null);
    const fromRef = useRef<HTMLInputElement>(null);
    const toRef = useRef<HTMLInputElement>(null);

    const newFromTime:string = getTimeString(planData.fromTime)
    const newToTime:string = getTimeString(planData.toTime)

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
    const transfer =()=>{
      planData.resultArea = !planData.resultArea
      handleChangePlan(planData)
    }
    return (
        <>
        <ModalCard plan={planData} handleChangePlan={handleChangePlan} opened={opened} open={open} close={close} />
          <div>
            <Card  className='w-72 m-2 bg-slate-600 cursor-pointer' id={planData.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
              <DatesProvider  settings={{ locale: 'ja', firstDayOfWeek: 0, weekendDays: [0], timezone: 'Asia/Tokyo' }}>
              <div className='flex justify-around'>
                <TimeInput  defaultValue={newFromTime} onChange={(event) => setFromValue(event.currentTarget.valueAsDate)} className='p-1 cursor-pointer' style={{width:"100px"}} label="" ref={fromRef} />
                <span>-</span>
                <TimeInput defaultValue={newToTime} onChange={(event) => setToFromValue(event.currentTarget.valueAsDate)} className='p-1 cursor-pointer' style={{width:"100px"}} label="" ref={toRef}  />
              </div>
            </DatesProvider>
                <Carousel withIndicators height={150} loop>
                {planData.images?.map((image)=>{
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
                <Text fw={500}>{planData.title}</Text>
                <ScrollArea w={300} style={{"height":"fit-content"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="x">
                <div className=' w-full flex flex-nowrap overflow-auto mb-2'>
                  {
                    planData.tags.map((tag,index)=>(
                      <Badge key={index} className='mr-2 min-w-fit' color="pink">{tag}</Badge>
                    ))
                  }
                </div>
                </ScrollArea>
              </Group>

              <Text size="sm" c="dimmed" h={20} className='truncate'>
                {planData.description}
              </Text>
              <div className='flex'>
              <Button onClick={open} color="blue" fullWidth mt="md" radius="md">
                編集
              </Button>
              <Button
                onClick={transfer}
                color={planData.resultArea ? 'red' : 'green'}
                fullWidth
                mt="md"
                radius="md"
              >
                {planData.resultArea ? '削除' : '追加'}
              </Button>

              </div>
            </Card>
            </div>
          
        </>
    );
  };
  
  export default CardCom;
  