"use client";

import { AddTodo } from '@/api'
import React, { ChangeEvent, FormEvent,useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const AddTask = () => {
  const [TaskTitle,setTaskTitle] = useState("")

  const handleSubmit=async(e:FormEvent)=>{
    e.preventDefault()
    await AddTodo({id:uuidv4(),text:TaskTitle})
    setTaskTitle("")
  }

  return (
    <form action="" className='mb-4 space-y-3' onSubmit={handleSubmit}>
        <input 
          type="text" 
          className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400'
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setTaskTitle(e.target.value)}
        />
        <button className='w-full ox-4 pt-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200'>Add Task</button>
    </form>
  )
}

export default AddTask