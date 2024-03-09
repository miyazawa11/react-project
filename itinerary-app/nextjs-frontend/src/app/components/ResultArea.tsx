import React from 'react'
import Image from 'next/image'
const ResultArea = () => {

    const detailPlans=[
        {
            id:1,
            plan:"静岡",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            file:"file",
            fromTime:"2023/10/2",
            toTime:"2023/10/2"
        },
        {
            id:2,
            plan:"静岡",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            file:"file",
            fromTime:"2023/10/2",
            toTime:"2023/10/2"
        },
        {
            id:3,
            plan:"静岡",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            file:"file",
            fromTime:"2023/10/2",
            toTime:"2023/10/2"
        },
        {
            id:4,
            plan:"静岡",
            memo:"memo memo memo memo memo memo memo memo memo memo ",
            file:"file",
            fromTime:"2023/10/2",
            toTime:"2023/10/2"
        },
    ]

  return (
    <div className=' container'>
        {
            detailPlans.map((detailPlan)=>
                <div key={detailPlan.id} className='flex'>
                    <div className='ml-3'>
                        <p>{detailPlan.fromTime}</p>
                        <div></div>
                    </div>
                    <div className=' ml-3'>
                        <p>静岡</p>
                        <p>持ち物：</p>
                        <p>注意事項：</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKZe7Y6aNteMSXEh9ZymSOTtzJqn3NtrPLtgTPbiFNQ&s"/>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ResultArea