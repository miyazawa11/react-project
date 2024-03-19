"use client"
import { Plan } from "../interface"
import ResultAreaCom from "./ResultAreaCom"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const ResultArea = () => {

    const plans = [
        {
          id: '1',
          title: '北海道',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
          ],
          description: 'ほたて食べたい',
          fromTime:new Date('2024-01-01'),
            toTime:new Date('2024-01-01')
        },
        {
          id: '2',
          title: '熱海',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
          ],
          description: 'おさかな食堂　トロとろとろ丼',
          fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
        },
        {
          id: '3',
          title: '山形',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
          ],
          description: '山形プリンたべる',
          fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
        },
        {
          id: '4',
          title: '日光',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
          ],
          description: '日光東照宮から鬼怒川温泉',
          fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
        },
        {
          id: '5',
          title: 'Norway Fjord Adventures',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
          ],
          description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
          fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
        },
        {
          id: '6',
          title: 'Norway Fjord Adventures',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
          ],
          description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
            fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
        },
        {
          id: '7',
          title: 'Norway Fjord Adventures',
          images: [
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
          ],
          description: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
          fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
          
        },
        // 他のプランのオブジェクト...
      ];
      const handleDragEnd =()=>{
        console.log("drop")
    }

    const newPlan=()=>{
        console.log("aa")
    }

  return (
    <div className='container h-full'>
            <p>完成系イメージ</p>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="selected">
                    {(provided) => (
                        <div 
                            ref={provided.innerRef} 
                            {...provided.droppableProps} 
                            className='flex flex-wrap justify-start relative w-fit mx-auto'
                        >
                            {plans.map((plan, index) => (
                                <Draggable key={plan.id} draggableId={plan.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        
                                        >
                                            <ResultAreaCom plan={plan} />
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
                <button onClick={newPlan}>+</button>
            </div>
        </div>
  )
}

export default ResultArea