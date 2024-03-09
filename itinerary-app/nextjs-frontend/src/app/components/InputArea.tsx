import React from 'react'

const InputArea = () => {

    const items=[
        {id:1,plan:"京都"},
        {id:2,plan:"静岡"},
        {id:3,plan:"東京"},
    ]

  return (
    <div className=' container flex'>
        <div className='flex'>
            <input 
                type="text" 
                className="py-3 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                placeholder="予定を入れよう"
            />
            <button className=' border-solid'>追加</button>
        </div>
        <div>
            <form className="max-w-sm">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">未設定</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>旅行先</option>
                {items.map((item)=>
                <option key={item.id}>{item.plan}</option>
                )}
            </select>
            </form>
        </div>
    </div>
  )
}

export default InputArea