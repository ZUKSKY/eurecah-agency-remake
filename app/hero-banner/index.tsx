'use client'
import React, { ReactNode, useRef } from 'react'

import Image from 'next/image';
import { MotionProps, easeInOut, motion , useScroll , useTransform } from 'framer-motion';

import styles from './styles.module.scss'

import image1 from '@/public/assets/asset 16.png';
import image2 from '@/public/assets/asset 17.png';
import image3 from '@/public/assets/asset 18.png';

const HeroBanner = () => {

  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target : container,
    offset : ["end start" , "start end"]
  });

  const x1 = useTransform(scrollYProgress , [0 , 1] , ["10%" , "-10%"])
  const x2 = useTransform(scrollYProgress , [0 , 1] , ["-10%" , "10%"])

  const y1 = useTransform(scrollYProgress , [0 , 1] , [0 , 400])

  const animation:MotionProps = {
    variants : {
      initial : { y : "100%" },
      enter: (i: number[]) => ({
        y: 0,
        transition: { duration: 0.6 ,ease:easeInOut , delay: i[0] },
      }),
      exit: (i: number[]) => ({
        y: 0,
        transition: { duration: 0.7,ease:easeInOut , delay: i[1] },
      }),
    },
    initial : "initial",
    whileInView : ["enter" , "exit"],
    exit: "exit",
  }

  const getChars = (word: string) => {
    let chars: ReactNode[] = [];
  
    word.split("").forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          custom={[i * 0.06, (word.length - i) * 0.03]}
          {...animation}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
  
    return chars;
  };

  return (
    <main className={styles.main} ref={container}>
      <div className='w-screen h-3/4 flex flex-col justify-center gap-y-8 md:justify-evenly overflow-hidden relative'>
        <div className='z-30 overflow-hidden'>
          <motion.p 
            style={{x : x1}}
            className={styles.heading}
          >{getChars("our expertise our expertise")}</motion.p>
        </div>
        <div className='z-10 overflow-hidden'>
          <motion.p
            style={{x: x2}}
            className={styles.heading}
          >{getChars("our expertise our expertise")}</motion.p>
        </div>

        <motion.div className='absolute left-[40%]  z-0 transition-all duration-75 ease-in-out'
          style={{ y : y1}}
        >
          <Image 
            src={image1}
            alt='image1'
            className='w-[150px] h-[175px] md:w-[350px] md:h-[400px]'
          />
        </motion.div>

        <motion.div className='absolute left-[10%] top-1/2 z-20 transition-all duration-75 ease-in-out'
        >
          <Image 
            src={image2}
            alt='image1'
            className='w-[100px] h-[120px] md:w-[250px] md:h-[250px]'
          />
        </motion.div>

        <motion.div className='absolute left-3/4 top-0 z-20 transition-all duration-75 ease-in-out'
          style={{ y : y1}}
        >
          <Image 
            src={image3}
            alt='image1'
            className='w-[100px] h-[120px] md:w-[250px] md:h-[250px]'
          />
        </motion.div>
      </div>
    </main>
  )
}

export default HeroBanner;