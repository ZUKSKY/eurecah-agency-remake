"use client";
import React, { use, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Minus } from "lucide-react";

import PrimaryBtn from "../../primary-btn";

import Image3 from "@/public/assets/asset 15.png";
import Image1 from "@/public/assets/asset 13.png";
import Image2 from "@/public/assets/asset 14.webp";

const imageClips = [
  {
    image: Image1,
    title: "uru sports",
    text: "001",
    index: 0,
  },
  {
    image: Image2,
    title: "pepsico",
    text: "002",
    index: 1,
  },
  {
    image: Image3,
    title: "era carbon",
    text: "003",
    index: 2,
  },
];

const aboutUs = [
  "Through strategic insight and creative prowess,",
  "we craft unique brand identities, compelling",
  "products, and immersive web experiences."  
];

const About2 = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex) => (imageIndex + 1) % 3);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const indexContainer = useRef<HTMLDivElement | null>(null);
  const paraContainer = useRef<HTMLDivElement | null>(null);


  const isIndexInView = useInView(indexContainer);
  const isParaInView = useInView(paraContainer);

  const roll = {
    initial: {
      y: "100%",
    },
    enter: (i: number) => ({
      y: "0%",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.3,
      },
    }),
    exit: (i: number) => ({
      y: "100%",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div className="w-screen text-white h-full bg-black">
      <div className="pt-[5vh] lg:pt-[5vh]">
        <div className="px-8 lg:px-16 grid-container2">
          <div className=" flex items-center justify-start  index2">
          <span className="text-7xl text-white lg:text-9xl">
              <Minus size={48} />
            </span>
            <div className="overflow-hidden flex" ref={indexContainer}>
              <motion.span
                className="text-7xl text-white font-bold lg:text-[150px]"
                variants={roll}
                initial="initial"
                animate={isIndexInView ? "enter" : "exit"}
                custom={1}
              >
                0
              </motion.span>
              <motion.span
                className="text-7xl text-white font-bold lg:text-[150px]"
                variants={roll}
                initial="initial"
                animate={isIndexInView ? "enter" : "exit"}
                custom={2}
              >
                2
              </motion.span>
            </div>
          </div>

          <div className="h-full lg:block content2" ref={paraContainer}>
            <div className="mt-8">
              <p className="font-medium text-xs uppercase opacity-60 text-white lg:text-base">
                [method]
              </p>
            </div>

            <div className="mt-4">
              {aboutUs.map((about, index) => (
                <div key={index} className="overflow-hidden flex">
                  <motion.p
                    className="text-lg lg:text-5xl lg:leading-[1.3]"
                    variants={roll}
                    initial="initial"
                    animate={isParaInView ? "enter" : "exit"}
                    custom={index}
                  >
                    {about}
                  </motion.p>
                </div>
              ))}
            </div>

            <div className="my-12 md:mt-6 md:mb-2">
              <PrimaryBtn  title={"view our work"}/>
            </div>
          </div>

          <div className="h-[17rem] w-[16rem] mt-4 clip-area2">
            <div className="h-full w-full">
              <Image
                src={imageClips[imageIndex].image}
                alt="image"
                className="w-[16rem] h-[17rem] object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between text-sm uppercase">
              <div>
                <p>{imageClips[imageIndex].title}</p>
              </div>

              <div>
                <p>{imageClips[imageIndex].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About2;
