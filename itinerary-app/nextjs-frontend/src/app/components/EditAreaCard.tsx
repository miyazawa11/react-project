
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useEffect, useRef, useState } from 'react';
import CardCom from './CardCom';
const EditAreaCard = ({plan,setPlanDataResultArea}) => {
    // useEffect(()=>{
    //     setPlanDataResultArea(planDataResultArea)
    // })
    const [resultArea,setResultArea] = useState(plan.resultArea)
  return (
    <>
    {
                plan.resultArea ? (
                    <div></div>
                ):(
                    <CardCom 
                    resultArea={resultArea}
                    setResultArea={setResultArea}
                />
                )
                }
                </>
  )
}

export default EditAreaCard