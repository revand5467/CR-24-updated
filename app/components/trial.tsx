// 'use client'
// import './parallelogram.css'
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image';
// const events = [
//   {
//     name: "CSE Dept. Tech Fest ",
//     imageLink: "/hash.png"
//   },
//   {
//     name: "EEE Dept. Tech Fest",
//     imageLink: "/adharva.svg"
//   },
//   {
//     name: "ECE Dept. Tech Fest",
//     imageLink: "/trydan.png"
//   },
//   {
//     name: "CE Dept. Tech Fest",
//     imageLink: "/adharva.svg"
//   },
// ];


// const Parallelogram = () => {
//   const [width2, setWidth] = useState(0);
//   const [height2, setHeight] = useState(0);

//   useEffect(() => {
//       if (typeof window !== 'undefined') {
//           setWidth(window.innerWidth);
//           setHeight(window.innerHeight);
//       }
//   },[] );
//   return (

//        <div  className="w-[calc(vw)] h-[calc(vw)+200px] flex items-center justify-center mb-20 mt-20  ">
//       <div className="flex sm:flex-row mb-11 gap-20 flex-col ">
//       {
//           events.map((e,index) => {

//             return (
//               <div key={index} className="relative  flex-col  sm:pl-3 ">
//                 <div className="absolute top-5 right-12  mr-4 ms:right-0 sm:w-[100x] md:h-[100px] w-[30px] h-[30px]  z-30">
//                    <Image
//               src="/arrow.png"
//               alt=""
//               width={70}
//               height={50}
//               className=" mb-20 ml-10  h-[100%] w-[100%] md:mb-22 md:ml-6   md:h-[50px] md:w-[60px] z-30 top-4 left-10"

//             />
//                 </div>
//                   <div  className={`parallelogram w-[calc(100vw/1.8)] h-[calc(100vh/3)] sm:w-[calc(100vw/5.5)]   sm:h-[calc(100vh/2.4)]  transform -skew-x-1 -skew-y-6 flex items-center justify-center `}>
//                <div key={index} className={`relative w-[calc(100vw/2)] h-[calc(100vh/3.4)] flex sm:w-[calc(100vw/6)] sm:border-10  sm:h-[calc(100vh/2.6)] border-[#061A19]  transform -skew-x-0 -skew-y-4  items-end justify-bottom  bg-[#061A19]`}>
//               <div className=' flex items-center justify-center'>

//               <Image
//               src={e.imageLink  }
//               alt=""
//               width={108}
//               height={208}
//               className=" mb-20 ml-10  h-[100%] w-[100%] md:mb-22 md:ml-6   md:h-[200px] md:w-[200px]"

//             />
//               </div>

//                </div>
//                </div>
//                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[calc(100vw/6)] h-[20px] bg-orange border-white z-30"  >

//                 </div> */}


//                  <div className="absolute pb-1  sm:mt-6  top-3/4 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 sm:w-[calc(100vw/6)] sm:h-[30px] h-[20px] sm:ml-1  bg-orange border-white z-30 w-[calc(100vw/1.988)]">
//                   <h1 className="text-center text-sm text-stone-50 sm:text-lg font-medium font-['Poppins']  tracking-tighter ">{e.name}</h1>
//                  </div>

//               </div>

//              // <div key={index} className=" sm:w-[calc(100vw/6)] border-[20px]  sm:h-[calc(100vh/2)]  transform skew-x-12 bg-white z-0"></div>
//             )
//           })
//         }

//       </div>

//     </div>



//   )
// }

//export default Parallelogram
'use client';
import './parallelogram.css';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Image from 'next/image';
import { useInView } from "react-intersection-observer";
const events = [
  {
    name: "CSE Dept. Tech Fest",
    imageLink: "/hash.png"
  },
  {
    name: "EEE Dept. Tech Fest",
    imageLink: "/adharva.svg"
  },
  {
    name: "ECE Dept. Tech Fest",
    imageLink: "/trydan.png"
  },
  {
    name: "CE Dept. Tech Fest",
    imageLink: "/adharva.svg"
  },
];

const cardVariants1: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
const cardVariants = {

  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,

    },
  },
};

const Parallelogram = () => {
  const controls = useAnimation();
  const squareVariants = {
    visible: { opacity: 1.2, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const loopAnimation = {
    scale: [1, 1.05, 1], // Sequence of scales
    transition: { duration: 3, ease: "easeOut", repeat: Infinity, type: 'tween' }, // Infinite loop
  };
  const [width2, setWidth] = useState(0);
  const [height2, setHeight] = useState(0);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setWidth(window.innerWidth);
  //     setHeight(window.innerHeight);
  //   }
  // },[] );

  return (
    <div className="w-[calc(vw)] h-[calc(vw)+200px] flex items-center justify-center mb-20 mt-20">
      <div className="flex sm:flex-row mb-11 gap-20 flex-col">
        {events.map((e, index) => (
          <motion.div
            key={index}
            //onViewportEnter={}
            className="relative flex-col sm:pl-3"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            // animate={inView ? "visible" : "hidden"
            // }
            //whileInView={{ scale: 1.2 }}
            viewport={{ once: true, amount: 0.8 }}
            //onScroll={controls.start}
            //transition={{ duration: 4 , delay:2 }}
            whileHover={{ scale: 1.2 }}
            exit="hidden"
            transition={{ duration: 0.2, ease: "easeOut" }}
            // className="box"
            ref={ref}
          >
            <motion.div
              key={index}
              // className="relative flex-col sm:pl-3"
              //variants={squareVariants}
              //initial="hidden"
              animate={inView ? (loopAnimation) : "hidden"}
              //transition={{ duration: 4 , delay:2 }}
              whileHover={{ scale: 1.2 }}
              //exit="hidden"
              //  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              // className="box"
              ref={ref}
            >
              <div className="absolute top-5 right-12  mr-4 ms:right-0 sm:w-[100x] md:h-[100px] w-[30px] h-[30px]  z-30">
                <Image
                  src="/arrow.png"
                  alt=""
                  width={70}
                  height={50}
                  className=" mb-20 ml-10  h-[100%] w-[100%] md:mb-22 md:ml-6   md:h-[50px] md:w-[60px] z-30 top-4 left-10"
                />
              </div>
              <div className={`parallelogram  w-[calc(100vw/1.8)] h-[calc(100vh/3)] sm:w-[calc(100vw/5.5)]   sm:h-[calc(100vh/2.4)]  transform -skew-x-1 -skew-y-6 flex items-center justify-center `}>
                <div key={index} className={`relative w-[calc(100vw/2)] h-[calc(100vh/3.4)] flex sm:w-[calc(100vw/6)] sm:border-10  sm:h-[calc(100vh/2.6)] border-[#061A19]  transform -skew-x-0 -skew-y-4  items-end justify-bottom  bg-[#061A19]`}>
                  <div className=' flex items-center justify-center'>
                    <Image
                      src={e.imageLink}
                      alt=""
                      width={108}
                      height={208}
                      className=" mb-20 ml-10  h-[100%] w-[100%] md:mb-22 md:ml-6   md:h-[200px] md:w-[200px]"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute pb-1  sm:mt-6  top-3/4 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 sm:w-[calc(100vw/6)]  sm:h-[30px] h-[20px] sm:-ml-[2.1px]   bg-orange border-white z-30 w-[calc(100vw/1.988)]">
                <h1 className="text-center text-sm text-stone-50 sm:text-lg font-medium font-['Poppins']  tracking-tighter ">{e.name}</h1>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Parallelogram;


