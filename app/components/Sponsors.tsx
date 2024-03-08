"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import heartr from "../../public/Heartr.png";
import Image from "next/image";
import reg from "../../public/reg.png";
import penta_hut from "../../public/penta_hut.png";
import kims from "../../public/kims.png";
import bajaj from "../../public/bajaj.png";
import hll from "../../public/hll.png";
import south_park from "../../public/south_park.png";
import mpire from "../../public/mpire.png";
import mot from "../../public/mot.png";
import realme from "../../public/realme.png";
import trident from "../../public/trident.png";
import sukumar from "../../public/sukumar.png";
import care_mithra from "../../public/care_mithra.png";
import de_holidays from "../../public/de_holidays.png";
import babas from "../../public/babas.png";
import bhima from "../../public/bhima.png";
import bunker from "../../public/bunker.png";
import petoria from "../../public/petoria.png";
import hasnas from "../../public/hasnas.png";
import turkish_delight from "../../public/turkish_delight.png";
import helmet_world from "../../public/helmet_world.png";
import group from "../../public/group.png";
const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: false
  });
  return (
    <div>
      <div
        className="relative flex h-screen flex-row justify-between space-x-5"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 3 }}
          className=" absolute inset-0 z-50 flex flex-col justify-center  "
        >
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            <Image alt="reg logo" src={reg} className="" />
            <Image alt="penta_hut logo" src={penta_hut} className="" />
            <Image alt="Reg logo" src={kims} className="" />
            <Image alt="Reg logo" src={bajaj} className="" />
            <Image alt="Reg logo" src={hll} className="" />
            <Image alt="Reg logo" src={south_park} className="" />
            <Image alt="Reg logo" src={mpire} className="" />
            <Image alt="Reg logo" src={mot} className="" />
          </div>
          {/* <div className="flex flex-row flex-wrap justify-center space-x-4">
            {" "}
            <Image alt="reg logo" src={group} className="" />
  </div>*/}
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            <Image alt="Reg logo" src={realme} className="" />
            <Image alt="Reg logo" src={trident} className="" />
            <Image alt="Reg logo" src={sukumar} className="" />
            <Image alt="Reg logo" src={reg} className="opacity-0" />
            <Image alt="Reg logo" src={reg} className="opacity-0" />
            <Image alt="Reg logo" src={care_mithra} className="" />
            <Image alt="Reg logo" src={de_holidays} className="" />
            <Image alt="Reg logo" src={babas} className="" />
          </div>
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            <Image alt="Reg logo" src={bhima} className="" />
            <Image alt="Reg logo" src={bunker} className="" />
            <Image alt="Reg logo" src={petoria} className="" />
            <Image alt="Reg logo" src={reg} className="opacity-0" />
            <Image alt="Reg logo" src={reg} className="opacity-0" />
            <Image alt="Reg logo" src={hasnas} className="" />
            <Image alt="Reg logo" src={turkish_delight} className="" />
            <Image alt="Reg logo" src={helmet_world} className="" />
          </div>
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            <Image alt="Reg logo" src={realme} className="" />
            <Image alt="Reg logo" src={trident} className="" />
            <Image alt="Reg logo" src={reg} className="" />
            <Image alt="Reg logo" src={reg} className="" />
            <Image alt="Reg logo" src={reg} className="" />
            <Image alt="Reg logo" src={reg} className="" />
            <Image alt="Reg logo" src={reg} className="" />
            <Image alt="Reg logo" src={reg} className="" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-4xl font-bold text-amber-600"
        >
          <div className=" text-white">Our</div>
          <div className="mb-20">Sponsors</div>
        </motion.div>
        <div className="  flex  w-1/2 justify-end   text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={inView ? { x: "-120%", opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="mt-20 flex w-full items-center justify-end"
          >
            <Image
              alt="heart right"
              src={heartr}
              className="justify-right flex h-2/3 w-1/2 scale-x-[-1]"
            />
          </motion.div>
        </div>

        <div className=" flex w-1/2 justify-start text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={inView ? { x: "120%", opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className=" mt-20 flex w-full items-center"
          >
            <Image alt="heart right" src={heartr} className="h-2/3 w-1/2" />
          </motion.div>
        </div>
        {/*<motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="w-full text-5xl"
        >
          hi
  </motion.div>*/}
      </div>
    </div>
  );
};

export default Sponsors;
