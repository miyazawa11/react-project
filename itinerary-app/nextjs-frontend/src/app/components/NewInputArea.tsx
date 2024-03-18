"use client"
import React from 'react'
import '@mantine/dates/styles.css';
import { ActionIcon, rem } from '@mantine/core';
import { useState,useRef } from 'react';
import { DatePicker } from '@mantine/dates';
import { TimeInput } from '@mantine/dates';
import { DatePickerInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
// import { MultiSelect } from '@mantine/core';
import { MultiSelectCreatable } from './MultiSelect';

const NewInputArea = () => {
  const ref = useRef<HTMLInputElement>(null);
  const multiSelectRef=useRef<HTMLInputElement>(null)
  console.log()
  const func =()=>{
    console.log(ref)
  }
  
  const [value, setValue] = useState<Date[]>([]);
  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );
  return (
    <div>
        <div className='h-full w-full container mx-auto'>
            <div className='mt-3 px-20'>
              <div className="relative mt-3">
                <input type="email" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter title"/>
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  {/* <svg className="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> */}
                </div>
              </div>

              <div className="relative mt-3">
                <input type="password" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter password"/>
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  {/* <svg className="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg> */}
                </div>
              </div>

              <form className='mt-3'>
                <label htmlFor="large-file-input" className="sr-only">Choose file</label>
                <input type="file" name="large-file-input" id="large-file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 file:sm:py-5 dark:file:bg-gray-700 dark:file:text-gray-400" />
              </form>

              <div className='mt-3'>
              <DatePickerInput
                style={{width:'150px'}}
                type="multiple"
                label="Pick dates"
                placeholder="Pick dates"
                defaultValue={value}
                onChange={setValue}
              />
              </div>
              <div className='mt-3'>
                <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
              </div>
              <MultiSelectCreatable/>
            </div>
        </div>
    </div>
  )
}

export default NewInputArea