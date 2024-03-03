'use client';

import React, { useEffect } from 'react';
import {
  motion,
  useAnimate,
  useInView,
  useMotionValue,
  useTransform
} from 'framer-motion';
import Image from 'next/image';
import mbcet_image from '../../public/mbcet.png';

export default function CollegeAnimate() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const baseText = "that's mbcet " as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseText.slice(0, latest));

  useEffect(() => {
    if (isInView) {
      animate('#college_img', { opacity: 1, bottom: 0 }, { duration: 1 }).then(() => {
        animate('#point_text', { pathLength: 1, opacity: 1 }, { duration: 1 }).then(
          () => {
            const controls = animate(count, baseText.length, {
              type: 'tween',
              duration: 1,
              ease: 'easeInOut'
            });
            return controls.stop;
          }
        );
      });
    }
  }, [animate, count, isInView]);
  return (
    <div
      ref={scope}
      className="relative h-[200px] w-full overflow-hidden md:h-[300px] lg:h-[400px]"
    >
      <div className="pl-10">
        <motion.p className="h-5 font-pecita">{displayText}</motion.p>
        <svg
          className="-scale-x rotate-[200deg]"
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="67"
          viewBox="0 0 57 67"
          fill="none"
        >
          <g opacity="0.7">
            <path
              id="point_text"
              pathLength={0}
              opacity={0}
              d="M14.9963 0.27832C10.588 35.9098 19.8026 47.7573 56.2748 54.9467"
              stroke="#FFFBD7"
              strokeWidth="1.05646"
              strokeDasharray="5.28 5.28"
            />
          </g>
        </svg>
      </div>
      <Image
        id="college_img"
        className="y-0 absolute -bottom-[100%] w-full opacity-0"
        src={mbcet_image}
        alt={'MBCET'}
      />
    </div>
  );
}
