'use client'
import React from "react";

import { Plus } from "lucide-react";
import Image from "next/image";

import styles from "./styles.module.scss";

import image1 from "@/public/assets/asset 8.png";
import image2 from "@/public/assets/asset 10.png";
import image3 from "@/public/assets/asset 11.png";
import image4 from "@/public/assets/asset 12.png";

import Link from "next/link";
import { MotionProps, motion  } from "framer-motion";

const content = [
  {
    heading: "within Light",
    image: image1,
    tag: ["creative direction", "website"],
  },
  {
    heading: "uru sports",
    image: image2,
    tag: ["visual identity", "website"],
  },
  {
    heading: "pani water",
    image: image3,
    tag: ["creative direction", "branding", "visual identity"],
  },
  {
    heading: "era carbon",
    image: image4,
    tag: ["website"],
  },
];

const Featured = () => {

  const show:MotionProps = {
    variants: {
      hidden: { opacity: 0 , height : 0 },
      visible: { opacity: 1  , height : "50%"},
      slideStart: { height : 0},
      slideEnd: { height : "50%" },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    exit: ["hidden", "slideStart"],
    viewport: {
      amount: 0.6,
    },
    transition: { type: "spring", duration: 1, bounce: 0 , delay : 0.4},
  }

  const text:MotionProps = {
    variants : {
      hidden: { opacity: 0 , y : 100 },
      visible: { opacity: 1  , y : 0},
      slideStart: { y : 100},
      slideEnd: { y : 0 },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    exit: ["hidden", "slideStart"],
    viewport: {
      amount: 0.5,
    },
    transition: { type: "spring", duration: 1, bounce: 0 , delay : 0.2}
  }

  const container:MotionProps = {
    variants : {
      hidden : { backgroundColor : "#000" },
      visible : { backgroundColor : "#101010" },
      slideStart : { backgroundColor : "#000" },
      slideEnd : { backgroundColor : "#101010" },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    exit: ["hidden", "slideStart"],
    viewport: {
      amount: 0.5,
    },
    transition: { type: "spring", duration: 1, bounce: 0 ,}
  }

  const heading:MotionProps = {
    variants : {
      hidden : { y : 200 },
      visible : { y : 0 },
      slideStart : { y : 200 },
      slideEnd : { y : 0 },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    exit: ["hidden", "slideStart"],
    viewport: {
      amount: 0.4,
    },
    transition: { type: "spring", duration: 1.5, bounce: 0}
  }

  return (
    <main className={styles.main}>
      {content.map((item, index) => (
        <motion.div
          className="bg-[#101010] h-screen w-screen text-white sticky top-0"
          key={index}
          {...container}
        >
          <div className="flex justify-between items-center mr-6 py-6 mx-4">
            <Plus className="h-16 w-12" strokeWidth={0.8} />
            <Plus className="h-16 w-12" strokeWidth={0.8} />
          </div>
          <div className="flex justify-center items-center h-[calc(100vh-4rem)] relative">
            <motion.div className="absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 top-0  w-[80%] md:w-[500px] md:h-[500px]"
              {...show}
            >
              <Image 
                src={item.image}
                alt="image"
                width={500}
                height={500}
                className="object-cover object-center"
              />
            </motion.div>
 
            <div className="relative text-center">  
              <motion.div className={styles.container} {...heading}>
                <h1 className={styles.heading}>{item.heading}</h1>
              </motion.div>
              <div className="absolute bottom left-0 h-12 w-full flex justify-between items-center mt-4 px-4">
                <motion.div className="flex gap-x-4 items-center overflow-hidden" {...text}>
                  {
                    item.tag.map((tag, index) => (
                      <p key={index} className="font-bold text-xs md:text-base uppercase text-[#8B8B8B]">
                        {tag}
                      </p>
                    ))
                  }
                </motion.div>

                <Link href={"/"} className={styles.link}>
                  <motion.p className="font-bold text-xs md:text-base uppercase" {...text}>view project</motion.p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </main>
  );
};

export default Featured;
