"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Nameitlater = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const marginTop = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  return (
    <div>
      <div className="flex h-screen flex-row justify-between" ref={ref}>
        <div className="flex  w-1/2 justify-end bg-yellow-500 text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: "-100%", opacity: 1 }}
            transition={{ duration: 4 }}
            className="w-full bg-red-100"
          >
            H
          </motion.div>
        </div>

        <div className="flex w-1/2 justify-start bg-blue-700 text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: "100%", opacity: 1 }}
            transition={{ duration: 4 }}
            className="w-full bg-red-100"
          >
            I
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nameitlater;
