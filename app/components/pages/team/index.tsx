"use client";
import React, { use, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Minus } from "lucide-react";

import PrimaryBtn from "../../primary-btn";

import Image1 from "@/public/assets/asset 26.png"
import Image3 from "@/public/assets/asset 28.png"
import Image2 from "@/public/assets/asset 27.png"
import Footer from "../../footer";

const imageClips = [
  {
    image: Image1,
    title: "comiccon la",
    text: "001",
    index: 0,
  },
  {
    image: Image2,
    title: "organic olivia",
    text: "002",
    index: 1,
  },
  {
    image: Image3,
    title: "pani water",
    text: "003",
    index: 2,
  },
];

const aboutUs = [
  "We're a bunch of creatives and tech experts.",
  "From design to coding, we've got a mix that's",
  "as diverse as us. With a small team in the US,",
  "UK and Latin America, we're a group that",
  "thrives on collaboration and a healthy dose of",
  "fun. Expect lots of enthusiasm and attention to",
  "detail when working with us.",
];

const Team = () => {
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
    <div id="community" className="w-screen text-white h-full relative">
      <div className="pt-[5vh] lg:pt-[15vh]">
        <div className="px-8 lg:px-16 grid-container1">
          <div className=" flex items-center justify-start  index">
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
                3
              </motion.span>
            </div>
            <span className="text-7xl text-white lg:text-9xl">
              <Minus size={48} />
            </span>
          </div>

          <div className="h-full lg:block content" ref={paraContainer}>
            <div className="mt-12">
              <p className="font-medium text-xs uppercase opacity-60 text-white lg:text-base">
                [TEAM]
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

            <div className="my-6">
              <PrimaryBtn />
            </div>
          </div>

          <div className="lg:float-left h-[16rem] w-[17rem] mt-4 mb-20 clip-area">
            <div className="h-full w-full">
              <Image
                src={imageClips[imageIndex].image}
                alt="image"
                className="w-[17rem] h-[16rem] object-fill"
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
    </div>
  );
};

export default Team;
