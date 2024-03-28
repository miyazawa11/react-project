"use client";
import React, { useRef, useState, useEffect } from 'react';
import { PLANDATA } from '../../data';
import '@mantine/carousel/styles.css';
import { Card, Image, Text, Badge, Button, Group, Modal, Textarea, Input, ScrollArea, Box } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useDisclosure, useSetState } from '@mantine/hooks';
import { DraggableProvided,
    DroppableProvided,
    DropResult,
    Draggable,
    Droppable,
    DragDropContext, } from 'react-beautiful-dnd';
import CardCom from './CardCom';
import EditAreaCard from './EditAreaCard';
import { MultiSelectCreatable } from './MultiSelect';
import { Plan } from '../../interface';
import ModalCard from './ModalCard';
import { createPlan,updatePlan } from '@/api';

//型定義
interface EditAreaProps {
  move: boolean;
  planData: Plan[];
  handleChangePlanData: (newPlanData: Plan[]) => void;
}
const EditArea: React.FC<EditAreaProps> = ({move,planData,handleChangePlanData}) => {
  const [opened, { open, close }] = useDisclosure(false)

  const handleOnDragEnd=(result: any)=> {
    const items = Array.from(planData);
    console.log(items)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    handleChangePlanData(items);
    console.log(items)
  }
  const handleChangePlan=(newPlan:Plan)=>{
    console.log("editarea",newPlan.images)
    if(planData.some((plan)=>plan.id===newPlan.id)){
        console.log(updatePlan)
        updatePlan(newPlan)
        planData=planData.map((plan)=>plan.id===newPlan.id ? newPlan : plan)
        console.log(planData)
    }
    else{
        createPlan(newPlan)
        planData.push(newPlan)
    }
    console.log("planData",planData)
    handleChangePlanData(planData)
  }
    return (
        <div className='w-full flex justify-center '>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="planData">
                {(provided:DroppableProvided) => (
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
                        {planData.map((plan, index) => (
                            <Draggable key={plan.id} draggableId={plan.id} index={index}>
                                {(provided:DraggableProvided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className=''
                                    >
                                        <div>
                                      {
                                        //三交換演算子だとエラーなる
                                        !plan.resultArea && (
                                            <CardCom 
                                            planData={plan}
                                            handleChangePlan={handleChangePlan}
                                        />
                                        )
                                        }
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
        <ModalCard handleChangePlan={handleChangePlan}  plan={null} opened={opened} open={open} close={close}/>
        </div>
    );
}

export default EditArea;
