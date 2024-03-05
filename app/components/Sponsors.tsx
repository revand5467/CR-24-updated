"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import heartr from "../../public/Heartr.png";
import Image from "next/image";

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: false
  });
  return (
    <div>
      <div className="flex h-screen flex-row justify-between" ref={ref}>
        <div className="flex  w-1/2 justify-end  text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={inView ? { x: "-100%", opacity: 1 } : {}}
            transition={{ duration: 4, delay: 0.5 }}
            className="flex w-full items-center justify-end "
          >
            <Image
              alt="heart right"
              src={heartr}
              className="justify-right flex h-2/3 w-1/2 scale-x-[-1]"
            />
          </motion.div>
        </div>

        <div className="flex w-1/2 justify-start text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={inView ? { x: "100%", opacity: 1 } : {}}
            transition={{ duration: 4, delay: 0.5 }}
            className=" flex w-full items-center "
          >
            <Image alt="heart right" src={heartr} className="h-2/3 w-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
