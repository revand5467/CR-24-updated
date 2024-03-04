'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const Events = () => {

    const [width1, setWidth] = useState(0);
    const [height1, setHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
    }, []);
    return (
        <div style={{ width: `${width1}px`, height: `${height1}px` }} className=" h-vh pt-10 flex flex-col ">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-center text-orange text-[200px] uppercase">Events</h1>
                
            </div>
        </div>
    )
}

export default Events

//events

/**
 * <div className="w-[951.72px] h-[550.88px] relative">
    <div className="w-[951.72px] h-[550.88px] left-0 top-0 absolute">
        <div className="w-[914.79px] h-[507.02px] left-[36.93px] top-[43.85px] absolute bg-pink-600" />
        <div className="w-[919.41px] h-[517.79px] left-[20.77px] top-[22.31px] absolute bg-amber-500 border-2 border-black" />
        <div className="w-[927.87px] h-[524.72px] left-0 top-0 absolute bg-pink-600 border-4 border-black" />
        <div className="w-[156.95px] h-[46.16px] left-[603.96px] top-[439.32px] absolute bg-pink-600" />
        <img className="w-[422px] h-[495.23px] left-[422px] top-[28px] absolute origin-top-left rotate-180" src="https://via.placeholder.com/422x495" />
        <div className="left-[394px] top-[254px] absolute text-right text-amber-500 text-[94.09px] font-bold font-['Mohave'] leading-[82.32px] tracking-wide">CAMPUS<br/>AMBASSADOR</div>
        <div className="w-[190px] h-[63px] left-[249px] top-[411px] absolute bg-pink-600" />
    </div>
    <div className="w-[90.36px] h-[90.36px] left-[820px] top-[17.71px] absolute origin-top-left rotate-[-1.09deg]" />
</div>
//relative
<div className="w-full h-full relative">
    <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-4/5 h-4/5 bg-pink-600" />
        <div className="w-3/4 h-3/4 bg-amber-500 border-2 border-black" />
        <div className="w-full h-full bg-pink-600 border-4 border-black" />
        <div className="w-1/6 h-1/12 bg-pink-600" />
        <img className="w-1/2 h-3/4 origin-top-left rotate-180" src="https://via.placeholder.com/422x495" />
        <div className="text-right text-amber-500 text-6xl font-bold font-['Mohave'] leading-[82.32px] tracking-wide">CAMPUS<br/>AMBASSADOR</div>
        <div className="w-1/5 h-1/8 bg-pink-600" />
    </div>
    <div className="w-1/10 h-1/10 origin-top-left rotate-[-1.09deg]" />
</div>
 */