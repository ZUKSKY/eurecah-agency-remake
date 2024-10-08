"use client";
import React  from "react";

import { MotionProps, motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./styles.module.scss";

import image1 from "@/public/assets/asset 19.png";
import image2 from "@/public/assets/asset 20.jpeg";
import image3 from "@/public/assets/asset 21.jpeg";
import image4 from "@/public/assets/asset 22.gif";
import image5 from "@/public/assets/asset 23.png";
import image6 from "@/public/assets/asset 24.jpeg";
import image7 from "@/public/assets/asset 25.png";
import Image from "next/image";

const content = [
  {
    title: "creative direction",
    image: image1,
  },
  {
    title: "visual identity",
    image: image2,
  },
  {
    title: "branding",
    image: image3,
  },
  {
    title: "website",
    image: image4,
  },
  {
    title: "digital design",
    image: image5,
  },
  {
    title: "packing",
    image: image6,
  },
  {
    title: "community",
    image: image7,
  },
];

const Featured2 = () => {
 
  const hover: MotionProps = {
    variants : {
      initial : { y : 0 },
      hover : { y : '-75%' }
    },
    whileHover : 'hover',
    transition : {
      duration : 0.5,
      ease : [0.6,0.05,-0.01,0.9]
    }
  }

  const spring = {
    stiffness : 150 , 
    damping : 15,
    mass : 0.2
  }

  const mousePosition = {
    x : useSpring(0 , spring),
    y : useSpring(0 , spring)
  }


  const mouseMove = (e : any) => {
    const { clientX , clientY } = e;
    const targetX = clientX - (window.innerWidth * 0.125);
    const targetY = clientY - (window.innerHeight * 0.40);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  const show : MotionProps = {
    variants : {
      initial : { opacity : 0  },
      show : { opacity : 1 }
    },
    initial : 'initial',
    whileHover : 'show',
    transition : {
      duration : 0.5,
      ease : [0.6,0.05,0.01,0.9],
    }
  }

  return (
    <main className={styles.main}>
      <div className="h-full w-screen">
        {content.map((item, index) => (
          <div key={index}>
            <hr className="w-[90%] mx-auto opacity-40" />
            <div className="w-[90%] h-[40vh] mx-auto flex items-center justify-center relative" onMouseMove={mouseMove}>
              <div className="h-1/2 overflow-hidden">
                <motion.div {...hover}>
                  <motion.p>{item.title}</motion.p>
                  <motion.p className="translate-y-1/2 hidden md:flex">{item.title}</motion.p>
                </motion.div>  
              </div>

             

             <motion.div className="absolute w-full" {...show}>
              <motion.div className="bg-sky-400 lg:w-[250px] lg:h-[350px] rotate-12" style={{
                  x : mousePosition.x,
                  y : mousePosition.y,
                }}>
                  <Image 
                    src={item.image}
                    alt="image"
                    className="object-cover object-center lg:h-[350px] lg:w-[250px]"
                  />
                </motion.div>
             </motion.div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Featured2;
