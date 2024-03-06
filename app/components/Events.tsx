// Events.tsx

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Events = () => {
    const [width1, setWidth] = useState(0);
    const [height1, setHeight] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            console.log(width1);
            setHeight(window.innerHeight);
        }
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                <div className="w-[80%] relative">
                    <Image
                        src="/Campus.jpg"
                        alt="Campus Ambassador Tiger"
                        layout="responsive"
                        width={50}
                        height={50}
                        className='z-20'
                    />
                    <div className={`absolute top-10 ml-[${width1/2}px] bg-yellow-200 w-full h-full -z-10`}></div>
                </div>
                </div>

            </div>

        </div>
    );
}

export default Events;