"use client"
import React, { useState,useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@/app/style.css'
import Image from "next/image";
import EditArea from "../app/components/EditArea"
import InputArea from "../app/components/InputArea";
import ResultArea from "../app/components/ResultArea";
import DetailArea from "../app/components/DetailArea";
import NewInputArea from '../app/components/NewInputArea';
import { Burger } from '@mantine/core';
import { ScrollArea } from '@mantine/core';
import {getAllplan} from "@/api"
// import { PLANDATA } from '../data';
import { Plan } from '../interface';

export default function Home() {
  const [opened, { toggle,close }] = useDisclosure();
  const [planData, setPlan] = useState<Plan[]>([]);
  const [move, setMove] = useState(false);
  useEffect(() => {
    const fetchPlanInfo = async () => {
      try {
        const planData = await getAllplan();
        planData.map((plan)=>{
          plan.fromTime=new Date(plan.fromTime)
          plan.toTime=new Date(plan.toTime)
        })
        setPlan(planData);
        console.log(planData)
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchPlanInfo();
  }, []);
  const handleChangePlanData=(newPlanData:Plan[])=>{
    setPlan(newPlanData)
    console.log("PLANDATA",planData)
  }
  
  return (

    <div className=" w-screen h-screen container mx-auto">
      <div className="grid grid-cols-3 grid-rows-12 h-full">
        <div className='flex pl-5 items-center col-span-1 row-span-1'>
          <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          <Drawer className='' opened={opened} onClose={close} title="Authentication"/>
        </div>
        <div className=' col-span-1 row-span-1 mx-auto'>
          <h1 className=' text-3xl pt-4'>アプリタイトル</h1>
        </div>
        <div className="col-span-1 row-span-12 mx-auto h-ful">
          <ScrollArea style={{ height: '100%' }} scrollbarSize={3}>
            <ResultArea planData={planData} handleChangePlanData={handleChangePlanData}/>
          </ScrollArea>
        </div>
          <div className=' h-full col-span-2 row-span-11  mx-auto -z-0 pt-10'>
            <ScrollArea style={{ height: '100%' }} scrollbarSize={3}>
              <EditArea move={move} planData={planData} handleChangePlanData={handleChangePlanData} />
            </ScrollArea>
          </div>
      </div>
    </div>

  );
}
