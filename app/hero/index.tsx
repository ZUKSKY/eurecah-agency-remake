"use client";
import React, { ReactNode } from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { anim , inject, opacity, popIn } from "../components/anim/anim";

// TODO : Modify inject animation


const Hero = () => {
  const getChars = (word: string) => {
    let chars: ReactNode[] = [];

    word.split("").forEach((char: string, i: number) => {
      chars.push(
        <motion.span
        className="inline-block"
          custom={[i * 0.02, (word.length - i) * 0.01]}
          {...anim(inject)}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  return (
    <main className="relative w-screen">
      <div className="w-screen h-screen absolute left-0 top-0">
        <video
          src="/assets/videos/hero.mp4"
          autoPlay
          muted
          loop
          className="w-full object-cover h-full"
        />
      </div>
      <motion.div className="absolute left-0 w-screen h-[15vh] bottom-[15vh] lg:bottom-[35vh]">
        <motion.div className={styles.headingtext} {...anim(opacity)}>
          <div className="text-xs flex absolute top-0 left-1/2 justify-between items-center w-[90%] h-4 py-2 mt-2 -translate-x-1/2 -translate-y-1/2">
            <div>
              <p>[CREATIVE AGENCY]</p>
            </div>

            <div className="flex gap-x-2">
              <p>[USA]</p>
              <p>[UK]</p>
            </div>
          </div>
            <motion.div className="uppercase w-full text-center lg:mt-2 overflow-hidden p-4 ">
              <h1 className={styles.heroline}>
                {getChars("Silence")} {getChars("The")} {getChars("Noice")}
              </h1> 
            </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-screen h-screen bg-white"></div>
    </main>
  );
};

export default Hero;
