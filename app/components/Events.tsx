// Events.tsx

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
        <div className="relative w-full h-full flex flex-col items-center justify-center sm:mt-0 -mt-[300px]">
            <div className="relative flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                <div className="w-[80%] relative ">
                <Link href="/campus-ambassador">
                    <Image
                        src="/Campus.jpg"
                        alt="Campus Ambassador Tiger"
                        layout="responsive"
                        width={50}
                        height={50}
                        className='z-20 shadow-2xl hover:shadow-none shadow-yellow-400 hover:translate-y-10'
                    />
                     </Link>
                    {/* <div className={`absolute top-10 ml-[${width1/2}px] bg-yellow-200 w-full h-full -z-10`}></div> */}
                </div>
                </div>

            </div>

        </div>
    );
}

export default Events;