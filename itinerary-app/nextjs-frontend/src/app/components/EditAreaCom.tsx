import React,{useState} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDisclosure } from '@mantine/hooks';
import CardCom from './CardCom';

const EditAreaCom = ({plan},{move}) => {
    const [planData, updatePlanData] = useState(plan);
    function handleOnDragEnd(result: any) {
        const items = Array.from(planData);
        console.log(items)
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updatePlanData(items);
        console.log(items)
      }
  return (
    <>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="planData">
                {(provided) => (
                    <div 
                        ref={provided.innerRef} 
                        {...provided.droppableProps} 
                        className='flex flex-wrap justify-start relative w-fit mx-auto'
                    >

                            <Draggable key={plan.id} draggableId={plan.id} index={plan.id}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className=''
                                    >
                                      {
                                        plan.resultArea ? (
                                          <div></div>
                                        ):(
                                          <CardCom 
                                            id={plan.id} 
                                            title={plan.title} 
                                            images={plan.images} 
                                            description={plan.description}
                                            resultArea={plan.resultArea}
                                            setResultArea={setResultArea}
                                            // handleRsultArea={handleRsultArea}
                                          />
                                        )
                                      }
                                    </div>
                                )}
                            </Draggable>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    </>
  )
}

export default EditAreaCom