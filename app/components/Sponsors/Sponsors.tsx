"use client";
import React from "react";
import "./sponsors.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import heartr from "../../../public/Heartr.png";
import Image from "next/image";
import reg from "../../../public/logos/reg.png";
import penta_hut from "../../../public/logos/penta_hut.png";
import kims from "../../../public/logos/kims.png";
import bajaj from "../../../public/logos/bajaj.png";
import hll from "../../../public/logos/hll.png";
import south_park from "../../../public/logos/south_park.png";
import mpire from "../../../public/logos/mpire.png";
import mot from "../../../public/logos/mot.png";
import realme from "../../../public/logos/realme.png";
import trident from "../../../public/logos/trident.png";
import sukumar from "../../../public/logos/sukumar.png";
import care_mithra from "../../../public/logos/care_mithra.png";
import de_holidays from "../../../public/logos/de_holidays.png";
import babas from "../../../public/logos/babas.png";
import bhima from "../../../public/logos/bhima.png";
import bunker from "../../../public/logos/bunker.png";
import petoria from "../../../public/logos/petoria.png";
import hasnas from "../../../public/logos/hasnas.png";
import turkish_delight from "../../../public/logos/turkish_delight.png";
import helmet_world from "../../../public/logos/helmet_world.png";
import group from "../../../public/group.png";
import times_of_india from "../../../public/logos/times_of_india.png";
import mathrubhumi from "../../../public/logos/mathrubhumi.png";
import hindu from "../../../public/logos/hindu.png";
import asb from "../../../public/logos/asb.png";
import rm from "../../../public/logos/rm.png";
import club_fm from "../../../public/logos/club_fm.png";
import romansons from "../../../public/logos/romansons.png";
import wowmomo from "../../../public/logos/wowmomo.png";
import br from "../../../public/logos/br.png";
import ieee from "../../../public/logos/ieee.png";
import muthoot from "../../../public/logos/muthoot.png";
import ibs from "../../../public/logos/ibs.png";
import airtel from "../../../public/logos/airtel.png";
import milma from "../../../public/logos/milma.png";
import ksfe from "../../../public/logos/ksfe.png";
import lyceum from "../../../public/logos/lyceum.png";
import yardley from "../../../public/logos/yardley.png";
import triassic from "../../../public/logos/triassic.png";
import ramachandran from "../../../public/logos/ramachandran.png";
import trivandrum from "../../../public/logos/trivandrum.png";
import astro from "../../../public/logos/astro.png";
import carton from "../../../public/logos/carton.png";
import pinnacle from "../../../public/logos/pinnacle.png";
import august_cinema from "../../../public/logos/august_cinema.png";
import tadka from "../../../public/logos/tadka.png";
import nexgen from "../../../public/logos/nexgen.png";
import tasty_cook from "../../../public/logos/tasty_cook.png";
import carmal from "../../../public/logos/carmal.png";
import lazza from "../../../public/logos/lazza.png";
import aim_britz from "../../../public/logos/aim_britz.png";
import kumbayah from "../../../public/logos/kumbayah.png";
import star from "../../../public/star.png";
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
            <Image alt="reg logo" src={reg} className="logos" />
            <Image alt="penta_hut logo" src={penta_hut} className="logos" />
            <Image alt="Reg logo" src={kims} className="logos" />
            <Image alt="Reg logo" src={bajaj} className="logos" />
            <Image alt="Reg logo" src={hll} className="logos" />
            <Image alt="Reg logo" src={south_park} className="logos" />
            <Image alt="Reg logo" src={mpire} className="logos" />
            <Image alt="Reg logo" src={mot} className="logos" />
          </div>

          <div className="flex flex-row flex-wrap justify-center space-x-4">
            <Image alt="Reg logo" src={realme} className="logos" />
            <Image alt="Reg logo" src={trident} className="logos" />
            <Image alt="Reg logo" src={sukumar} className="logos" />
            <Image alt="Reg logo" src={reg} className="logos opacity-0" />
            <Image alt="Reg logo" src={reg} className="logos opacity-0" />
            <Image alt="Reg logo" src={care_mithra} className="logos" />
            <Image alt="Reg logo" src={de_holidays} className="logos" />
            <Image alt="Reg logo" src={babas} className="logos" />
          </div>
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            <Image alt="Reg logo" src={bhima} className="logos" />
            <Image alt="Reg logo" src={bunker} className="logos" />
            <Image alt="Reg logo" src={petoria} className="logos" />
            <Image alt="Reg logo" src={reg} className="logos opacity-0" />
            <Image alt="Reg logo" src={reg} className="logos opacity-0" />
            <Image alt="Reg logo" src={hasnas} className="logos" />
            <Image alt="Reg logo" src={turkish_delight} className="logos" />
            <Image alt="Reg logo" src={helmet_world} className="logos" />
          </div>
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            <Image alt="Reg logo" src={times_of_india} className="logos" />
            <Image alt="Reg logo" src={mathrubhumi} className="logos" />
            <Image alt="Reg logo" src={hindu} className="logos" />
            <Image alt="Reg logo" src={asb} className="logos" />
            <Image alt="Reg logo" src={rm} className="logos" />
            <Image alt="Reg logo" src={club_fm} className="logos" />
            <Image alt="Reg logo" src={romansons} className="logos" />
            <Image alt="Reg logo" src={wowmomo} className="logos" />
          </div>
          {/* <div className="flex flex-row flex-wrap justify-center space-x-4">
            {" "}
            <Image alt="Reg logo" src={br} className="" />
            <Image alt="Reg logo" src={ieee} className="" />
            <Image alt="Reg logo" src={muthoot} className="" />
            <Image alt="Reg logo" src={ibs} className="" />
            <Image alt="Reg logo" src={airtel} className="" />
            <Image alt="Reg logo" src={milma} className="" />
            <Image alt="Reg logo" src={ksfe} className="" />
            <Image alt="Reg logo" src={lyceum} className="" />
          </div>
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            {" "}
            <Image alt="Reg logo" src={yardley} className="" />
            <Image alt="Reg logo" src={triassic} className="" />
            <Image alt="Reg logo" src={ramachandran} className="" />
            <Image alt="Reg logo" src={trivandrum} className="" />
            <Image alt="Reg logo" src={astro} className="" />
            <Image alt="Reg logo" src={carton} className="" />
            <Image alt="Reg logo" src={pinnacle} className="" />
            <Image alt="Reg logo" src={august_cinema} className="" />
          </div>
          <div className="flex flex-row flex-wrap justify-center space-x-4">
            {" "}
            <Image alt="Reg logo" src={tadka} className="" />
            <Image alt="Reg logo" src={nexgen} className="" />
            <Image alt="Reg logo" src={tasty_cook} className="" />
            <Image alt="Reg logo" src={carmal} className="" />
            <Image alt="Reg logo" src={lazza} className="" />
            <Image alt="Reg logo" src={aim_britz} className="" />
            <Image alt="Reg logo" src={kumbayah} />
            <Image alt="Reg logo" src={reg} className="opacity-0" />
</div>*/}
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-4xl font-bold "
        >
          <Image alt="star img" src={star} width={30} height={30}></Image>
          <div className="text-white">Our</div>{" "}
          <motion.div
            animate={inView ? { color: "white" } : {}}
            transition={{ duration: 0.5 }}
            className="text-amber-600"
          >
            Sponsors
          </motion.div>
          <Image alt="star img" width={30} height={30} src={star}></Image>
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
              className="justify-right mt-20  flex w-1/2 scale-x-[-1]"
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
            <Image alt="heart right" src={heartr} className=" mt-20 w-1/2" />
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
