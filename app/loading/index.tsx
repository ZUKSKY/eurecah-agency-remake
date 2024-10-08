'use client'
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const Loading = ({dimensions} : any) => {

  const anim = {
    initial: {
      opacity: 0,
    },
    animate: (delay: number) => ({
      opacity: 1,
      transition: { duration: 2, delay: 0.1 * delay},
    }),
    exit: (delay: number) => ({
      opacity: 0,
      transition: { duration: 2, delay: 0.2 * delay },
    }),
  };

  const shuffle = (a: any) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };


  const getBlock = () => {
    const { width, height } = dimensions;
    const blockSize = Math.ceil(width * 0.1);

    console.log(width , height, blockSize)
    const amountOfBlocks = Math.ceil(height / blockSize);
    const delay = shuffle([...Array(amountOfBlocks)].map((_, i) => i));

    return delay.map((delay: number, i: number) => {
      return (
        <motion.div
          key={i}
          className={styles.block}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={anim}
          custom={delay}
        ></motion.div>
      );
    });
  };

  return (
    <main className={styles.main}>
      {[...Array(10)].map((_, i) => {
        return <div className={styles.column} key={i}>{getBlock()}</div>;
      })}
    </main>
  );
};

export default Loading;
