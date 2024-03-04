"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";

export default function OurLegacyVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "20px"]);
  const marginTop = useTransform(scrollYProgress, [0, 1], ["0vh", "120vh"]);
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "50%"], {
    ease: cubicBezier(0.62, 0, 0.41, 1)
  });
  // useTransform(scale, (value) => `${value}%`);

  return (
    <motion.section
      ref={ref}
      className="relative my-10 flex h-[200vh] w-full flex-col items-center"
    >
      <motion.div
        className="z-20 aspect-video max-h-[100vh]"
        style={{ width, marginTop }}
      >
        <motion.iframe
          style={{ borderRadius }}
          className="h-full min-h-[200px] w-full"
          src="https://www.youtube.com/embed/QaXcVAkamxc"
          title="CROSSROADS&#39;23 | After Movie | Mar Baselios College of Engineering and Technology"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></motion.iframe>
      </motion.div>
      <div className="absolute mt-[120vh] aspect-video w-[50%]">
        <Image
          src="/legacy.png"
          alt=""
          width={1080}
          height={1080}
          className="absolute -bottom-[100px] -right-[100px] h-[100px] w-[100px]  animate-spin md:h-[300px] md:w-[300px]"
          style={{ animationDuration: "4s" }}
        />
        <Image
          src="/legacy.png"
          alt=""
          width={1080}
          height={1080}
          className="absolute -left-[100px] -top-[100px] h-[100px] w-[100px]  animate-spin md:h-[300px] md:w-[300px]"
          style={{ animationDuration: "4s" }}
        />
      </div>
    </motion.section>
  );
}
