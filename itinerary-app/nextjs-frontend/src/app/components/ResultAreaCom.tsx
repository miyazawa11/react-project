import React from 'react';
import { Plan } from '../interface';
import CardCom from './CardCom';

const ResultAreaCom = ({ plan }) => {
    function getTimeFromDate(date: Date): string {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    const fromTime = getTimeFromDate(plan.fromTime!)
    const toTime = getTimeFromDate(plan.toTime!)
    const date = `${plan.fromTime?.getMonth()}/${plan.fromTime?.getDate()}`
  return (
    <div className='mt-10  border-slate-800 rounded-md w-full'>
        {/* <div className='text-center'>{date} : {fromTime} - {toTime}</div>
        <div className='text-center mt-2'>
            <input type="text" className='border w-8/12' defaultValue={plan.plan}/>
        </div>
      <div className='text-center'>予算 {plan.budget} 円</div>
        <div className='text-center mt-2'>
            <textarea rows={3} className='border w-8/12 rounded-md' defaultValue={plan.memo}/>
        </div>
      <div className='flex justify-center items-center'>
        <button>←</button>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKZe7Y6aNteMSXEh9ZymSOTtzJqn3NtrPLtgTPbiFNQ&s"/>
        </div>
        <button>→</button>
      </div>
      <div className='h-10 mt-2 relative'>
            <div className='absolute top-1/2 left-1/2  border-black h-10 w-12'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
              </svg>
            </div>
        </div> */}
        <CardCom 
            id={plan.id} 
            title={plan.title} 
            images={plan.images} 
            description={plan.description}
            fromTime={plan.fromTime}
            toTime={plan.toTime}
        />
        <div className='h-10 mt-2 relative'>
            <div className='absolute top-1/2 left-1/2  border-black h-10 w-12'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
              </svg>
            </div>
        </div>
    </div>
  );
};

export default ResultAreaCom;