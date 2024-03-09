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
  const wSize = 140;
  const hSize = 100;
  return (
    <div>
      <div className="relative flex h-screen  justify-between space-x-5" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 3 }}
          className=" absolute inset-0 z-50 mt-20 flex flex-col  justify-start md:justify-center"
        >
          <div className="flex flex-row flex-wrap justify-center ">
            <Image alt="" src={reg} width={wSize} height={hSize} />
            <Image alt="" src={penta_hut} width={wSize} height={hSize} />
            <Image alt="" src={kims} width={wSize} height={hSize} />
            <Image alt="" src={bajaj} width={wSize} height={hSize} />
            <Image alt="" src={hll} width={wSize} height={hSize} />
            <Image alt="" src={south_park} width={wSize} height={hSize} />
            <Image alt="" src={mpire} width={wSize} height={hSize} />
            <Image alt="" src={mot} width={wSize} height={hSize} />
          </div>

          <div className="flex flex-row flex-wrap justify-center ">
            <Image alt="" src={realme} width={wSize} height={hSize} />
            <Image alt="" src={trident} width={wSize} height={hSize} />
            <Image
              alt=""
              src={sukumar}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={reg}
              width={wSize}
              height={hSize}
              className="hidden opacity-0 md:block"
            />
            <Image
              alt=""
              src={reg}
              width={wSize}
              height={hSize}
              className="hidden opacity-0 md:block"
            />
            <Image alt="" src={care_mithra} width={wSize} height={hSize} />
            <Image alt="" src={de_holidays} width={wSize} height={hSize} />
            <Image alt="" src={babas} width={wSize} height={hSize} />
          </div>
          <div className="flex flex-row flex-wrap justify-center ">
            <Image
              alt=""
              src={bhima}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={bunker}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={petoria}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={reg}
              className=" hidden pb-2 pr-2 opacity-0 md:block"
              width={wSize}
              height={hSize}
            />
            <Image
              alt=""
              src={reg}
              className=" hidden pb-2 pr-2 opacity-0 md:block"
              width={wSize}
              height={hSize}
            />
            <Image
              alt=""
              src={hasnas}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={turkish_delight}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={helmet_world}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center ">
            <Image
              alt=""
              src={times_of_india}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={mathrubhumi}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={hindu}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image alt="" src={asb} width={wSize} height={hSize} className="pb-2 pr-2" />
            <Image alt="" src={rm} width={wSize} height={hSize} className="pb-2 pr-2" />
            <Image alt="" src={club_fm} width={wSize} height={hSize} />
            <Image alt="" src={romansons} width={wSize} height={hSize} />
            <Image alt="" src={wowmomo} width={wSize} height={hSize} />
          </div>
          <div className="flex flex-row flex-wrap justify-center ">
            {" "}
            <Image alt="" src={br} width={wSize} height={hSize} className="pb-2 pr-2" />
            <Image alt="" src={ieee} width={wSize} height={hSize} className="pb-2 pr-2" />
            <Image
              alt=""
              src={muthoot}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image alt="" src={ibs} width={wSize} height={hSize} className="pb-2 pr-2" />
            <Image
              alt=""
              src={airtel}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={milma}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image alt="" src={ksfe} width={wSize} height={hSize} />
            <Image
              alt=""
              src={lyceum}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {" "}
            <Image
              alt=""
              src={yardley}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={triassic}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={ramachandran}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={trivandrum}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image
              alt=""
              src={astro}
              width={wSize}
              height={hSize}
              className="pb-2 pr-2"
            />
            <Image alt="" src={carton} width={wSize} height={hSize} />
            <Image alt="" src={pinnacle} width={wSize} height={hSize} />
            <Image alt="" src={august_cinema} width={wSize} height={hSize} />
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {" "}
            <Image alt="" src={tadka} width={wSize} height={hSize} />
            <Image alt="" src={nexgen} width={wSize} height={hSize} />
            <Image alt="" src={tasty_cook} width={wSize} height={hSize} />
            <Image alt="" src={carmal} width={wSize} height={hSize} />
            <Image alt="" src={lazza} width={wSize} height={hSize} />
            <Image alt="" src={aim_britz} width={wSize} height={hSize} />
            <Image alt="" src={kumbayah} width={wSize} height={hSize} />
            <Image alt="" src={reg} width={wSize} height={hSize} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
          className="absolute inset-0 z-10 flex h-2/3 flex-col items-center justify-center text-center text-4xl font-bold "
        >
          <Image alt="star img" src={star} width={30} height={30}></Image>
          <div className="text-white">Our</div>{" "}
          <motion.div
            ref={ref}
            animate={inView ? { color: "white" } : { color: "#FFB300" }}
            transition={{ duration: 2 }}
            className="text-amber-600"
          >
            Sponsors
          </motion.div>
          <Image alt="star img" width={30} height={30} src={star}></Image>
        </motion.div>
        <div className="  flex  h-2/3 w-1/2   justify-end text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={inView ? { x: "-120%", opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className="mt-28 flex w-full items-center justify-end"
          >
            <Image
              alt="heart right"
              src={heartr}
              className="justify-right mt-20  flex w-1/2 scale-x-[-1]"
            />
          </motion.div>
        </div>

        <div className=" flex h-2/3 w-1/2 justify-start text-4xl">
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={inView ? { x: "120%", opacity: 1 } : {}}
            transition={{ duration: 2, delay: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className=" mt-28 flex w-full items-center"
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
