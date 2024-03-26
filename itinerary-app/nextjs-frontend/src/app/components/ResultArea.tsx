"use client"
import { PLANDATA } from "../data"
import { Plan } from "../interface"
import ResultAreaCom from "./ResultAreaCom"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from "react";
import CardCom from "./CardCom";
import ModalCard from "./ModalCard";
import { useDisclosure } from '@mantine/hooks';

interface ResultAreaProps {
  planData: Plan[];
  handleChangePlanData: (newPlanData: Plan[]) => void;
}
const ResultArea: React.FC<ResultAreaProps> = ({planData,handleChangePlanData}) => {
  const [opened, { open, close }] = useDisclosure(false);
      const handleDragEnd =()=>{
        console.log("drop")
    }

    const createPlan=()=>{
      // createPlanModalOpen()
    }

  function handleOnDragEnd(result: any) {
    const items = Array.from(planData);
    console.log(items)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    handleChangePlanData(items);
    console.log(items)
  }
  const handleChangePlan=(newPlan:Plan)=>{
    handleChangePlanData(planData.map((plan)=>plan.id===newPlan.id ? newPlan : plan))
  }
  const findLastIndexWithTrueResultArea=():string|null=> {
    for (let i = planData.length - 1; i >= 0; i--) {
      if ((planData[i].resultArea == true)) {
        return planData[i].id;
      }
    }
    return null;
  }
  const displayArrow=(id:string):boolean=>{
    if(id===findLastIndexWithTrueResultArea()) return false
    else return true
  }
  return (
    <div className='container h-full'>
            <p>完成系イメージ</p>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="planData">
                    {(provided) => (
                        <div 
                            ref={provided.innerRef} 
                            {...provided.droppableProps} 
                            className='flex flex-wrap justify-start relative w-fit mx-auto'
                        >
                            {planData.map((plan, index) => (
                                <Draggable key={plan.id} draggableId={plan.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div className='mt-10  border-slate-800 rounded-md w-full'>
                                              {
                                                  plan.resultArea ? (
                                                    <div>
                                                      <CardCom 
                                                        planData={plan}
                                                        setPlan={handleChangePlan}
                                                        // handleRsultArea={handleRsultArea}
                                                      />
                                                      {
                                                        displayArrow(plan.id) &&(
                                                        <div className='h-10 mt-2 relative'>
                                                        <div className='absolute top-1/2 left-1/2  border-black h-10 w-12'>
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                                                          </svg>
                                                        </div>
                                                      </div>)
                                                      }
                                                      
                                                  </div>
                                                  ):(
                                                    <></>
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
            <div className=' text-center'>新しいプランを追加</div>
            <div>
                <button onClick={open}>+</button>
            </div>
            <ModalCard plan={null} opened={opened} open={open} close={close}/>
        </div>
  )
}

export default ResultArea