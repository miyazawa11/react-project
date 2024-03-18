"use client"
import { Plan } from "../interface"
import ResultAreaCom from "./ResultAreaCom"
const ResultArea = () => {

    const detailPlans:Plan[]=[
        {
            id:"1",
            plan:"熱海駅到着",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            // file:"file",
            fromTime:new Date(2023,10,30,10,10),
            toTime:new Date(2023,10,30,11,10)
        },
        {
            id:"2",
            plan:"MOA美術館へ",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            // file:"file",
            fromTime:new Date(2023,10,30,10,10),
            toTime:new Date(2023,10,30,11,10)
        },
        {
            id:"3",
            plan:"熱海プリン",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            // file:"file",
            fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
        },
        {
            id:"4",
            plan:"熱海駅出発",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            // file:"file",
            fromTime:new Date(2023,10,31,10,10),
            toTime:new Date(2023,10,31,11,10)
        },
    ]

    const newPlan=()=>{
        console.log("aa")
    }

  return (
    <div className=' container h-full'>
        <p>完成系イメージ</p>
        <div className=' text-center'>10月30日</div>
        <div>
            {detailPlans.map((plan) => (
                <ResultAreaCom key={plan.id} plan={plan} />
            ))}
        </div>
        <div className=' text-center'>10月31日</div>
        <div>
            <button onClick={newPlan}>+</button>
        </div>
    </div>
  )
}

export default ResultArea