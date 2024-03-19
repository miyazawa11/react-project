"use client"
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@/app/style.css'
import Image from "next/image";
import EditArea from "./components/EditArea"
import InputArea from "./components/InputArea";
import ResultArea from "./components/ResultArea";
import DetailArea from "./components/DetailArea";
import NewInputArea from './components/NewInputArea';
import { Burger } from '@mantine/core';
import { ScrollArea } from '@mantine/core';

export default function Home() {
  const [opened, { toggle,close }] = useDisclosure();
  const [move, setMove] = useState(false);

    const putTogether = () => {
        setMove(!move); // Toggle the move state on button click
    }
    const theme = createTheme({
      
    });
  return (
    <MantineProvider theme={{ components: { } }}>
    <div className=" w-screen h-screen container mx-auto">
      <div className="grid grid-cols-3 grid-rows-12 h-full">
        <div className='flex pl-5 items-center col-span-1 row-span-1'>
          {/* <button onClick={putTogether}>push</button> */}
          <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          <Drawer className='' opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>
        </div>
        <div className=' col-span-1 row-span-1 mx-auto'>
          {/* <InputArea move={move}/> */}
            <h1 className=' text-3xl pt-4'>アプリタイトル</h1>
        </div>
        <div className="col-span-1 row-span-12 mx-auto h-ful">
          <ScrollArea style={{ height: '100%' }} scrollbarSize={3}>
            <ResultArea/>
          </ScrollArea>
        </div>
        {move && <div className=' col-span-1 row-span-11 pt-10'>
          <ScrollArea style={{ height: '100%' }} scrollbarSize={3}>
            <EditArea move={move} />
            </ScrollArea>
          </div>
          }
          {!move && 
          <div className=' h-full col-span-2 row-span-11  mx-auto -z-0 pt-10'>
            <ScrollArea style={{ height: '100%' }} scrollbarSize={3}>
              <EditArea move={move} />
            </ScrollArea>
          </div>
          }
          { move &&
          <div className=' pt-10 col-span-1 row-span-11'>
            <NewInputArea/>
          </div>
        }
      </div>
      {/* <div className="grid grid-cols-12">
        <div className="grid grid-rows-11 col-span-4">
          <div className='flex justify-center items-center row-span-1'>
            <button onClick={putTogether}>push</button>
          </div>
          
          {move && <div className='row-span-10'>
          <ScrollArea h={1080} scrollbarSize={3}>
            <EditArea move={move} />
            </ScrollArea>
          </div>
          }
        </div>
        {!move && 
          <div className='h-[100% - 60px row-span-10 col-span-8  top-[60px] mx-auto -z-0'>
          <ScrollArea h={850} scrollbarSize={3}>
            <EditArea move={move} />
            </ScrollArea>
          </div>
          }
        <div className="h-full grid grid-rows-11 col-span-4">
          <div className=' h-1/4 row-span-1'>
            <InputArea move={move}/>
          </div>
        { move &&
          <div className='h-3/4 row-span-10'>
            <NewInputArea/>
          </div>
        }
        </div>
        
        <div className="col-span-4 mx-auto">
        <ScrollArea h={1080} scrollbarSize={3}>
          <ResultArea/>
          </ScrollArea>
        </div>
      </div> */}
    </div>

    </MantineProvider>
  );
}
