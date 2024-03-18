"use client";
import React, { useState } from 'react';
import Card from './CardCom';
import { Input } from '@mantine/core';

const EditArea = ({move}) => {

    return (
        <div className='w-full flex justify-center '>
            <div className='flex flex-wrap justify-start relative w-fit mx-auto'>
                <div>
                    <div className={`w-64 m-2 border rounded-md ${move ? 'absolute left-3' : ''}`}>
                        <div className={`${move ? ' hidden ' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {Array.from({ length: 9 }, (_, i) => (
                    <Card key={i} move={move} />
                ))}
            </div>
        </div>
    );
}

export default EditArea;
