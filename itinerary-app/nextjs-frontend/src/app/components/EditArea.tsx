"use client";
import React, { useRef, useState } from 'react';
import { Card, Image, Text, Badge, Button, Group ,Modal} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import CardCom from './CardCom';
import { Textarea } from '@mantine/core';
import { Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/carousel/styles.css'
import { MultiSelectCreatable } from './MultiSelect';
import { ScrollArea, Box } from '@mantine/core';
// import Draggable from 'react-draggable';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const EditArea = ({move}) => {
    const [opened, { open, close }] = useDisclosure(false)
    const plans = [
        {
          id: '1',
          title: '北海道',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
          ],
          description: 'ほたて食べたい'
        },
        {
          id: '2',
          title: '熱海',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
          ],
          description: 'おさかな食堂　トロとろとろ丼'
        },
        {
          id: '3',
          title: '山形',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
          ],
          description: '山形プリンたべる'
        },
        {
          id: '4',
          title: '日光',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
          ],
          description: '日光東照宮から鬼怒川温泉'
        },
        {
          id: '5',
          title: 'Norway Fjord Adventures',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
          ],
          description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway'
        },
        {
          id: '6',
          title: 'Norway Fjord Adventures',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
          ],
          description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway'
        },
        {
          id: '7',
          title: 'Norway Fjord Adventures',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
          ],
          description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway'
        },
        // 他のプランのオブジェクト...
      ];
    const newPlan =()=>{

    }
    const handleDragEnd =()=>{
        console.log("drop")
    }
    type Plan = {
        id: string;
        title: string;
        images: never[] | string[];
        description: string;
      };
    return (
        <div className='w-full flex justify-center '>
            <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="selected">
                {(provided) => (
                    <div 
                        ref={provided.innerRef} 
                        {...provided.droppableProps} 
                        className='flex flex-wrap justify-start relative w-fit mx-auto'
                    >
                        <div className=''>
                            <div onClick={open} className={`w-72 m-2 border rounded-md cursor-pointer  ${move ? 'absolute left-3' : ''}`}>
                                <div className={`${move ? ' hidden ' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {plans.map((plan, index) => (
                            <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className=''
                                    >
                                        <CardCom 
                                            id={plan.id} 
                                            title={plan.title} 
                                            images={plan.images} 
                                            description={plan.description}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
            {
                opened && 
                <Modal opened={opened} onClose={close} style={[{"width":"600px"},{"height":"800px"}]}>
          <Card className='w-80 h-96 mx-auto bg-slate-600 '  shadow="sm" padding="lg" radius="md">
            <Card.Section>
              <Carousel withIndicators height={150} loop>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              <Carousel.Slide>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
                style={[{"height":"100%"},{"objectFit":"contain"}]}
                alt="Norway"
              />
              </Carousel.Slide>
              {/* ...other slides */}
          </Carousel>
            </Card.Section>

            <Group justify="start" mt="sm" mb="sm">
              <Text fw={500}>
              <input type="email" defaultValue={"タイトル：Norway Fjord Adventures"} className="peer py-3 px-2 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter title"/>
              </Text>
              <ScrollArea w={300} style={{"height":"fit-content"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="x">
              <div className='w-full flex flex-nowrap overflow-auto mb-2'>
                <MultiSelectCreatable/>
              </div>
              </ScrollArea>
            </Group>
            <ScrollArea style={{"height":"full"}} scrollbarSize={5} scrollHideDelay={0} scrollbars="y">
            <Text size="md" c="dimmed">
                <Textarea 
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
            }
        </div>
    );
}

export default EditArea;
