"use client";
import React, { ReactNode } from "react";

import { MotionProps, motion } from "framer-motion";
import { anim, height, opacity, popOut, slide, translate } from "../../anim/anim";
import Link from "next/link";

import styles from "./styles.module.scss";
import Icon1 from "../../icons/twiter-icon";
import Icon2 from "../../icons/insta-icon";
import Icon3 from "../../icons/linkd-icon";
import { MoveUpRight } from "lucide-react";

const links = [
  {
    name: "WORK",
    url: "#work",
  },
  {
    name: "ABOUT",
    url: "#about",
  },
  {
    name: "COMMUNITY",
    url: "#community",
  },
  {
    name: "CONTACT",
    url: "#contact",
  },
];

const Header = ({ toggleNav }: { toggleNav: () => void }) => {

  const hover:MotionProps = {
    variants : {
      initial : { y : 0},
      hover : { y : "-75%"},
    },
    initial : "initial",
    whileHover : "hover",
    transition : { duration : 0.2}
  }

  const getChars = (word: string) => {
    let chars: ReactNode[] = [];
  
    word.split("").forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          {...anim(translate)}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
  
    return chars;
  };

  return (
    <div>
      <motion.div
        className="h-screen w-screen fixed top-0 left-0 bg-black -z-10"
        {...anim(slide)}
      ></motion.div>
      <motion.div
        {...anim(height)}
        className="flex w-screen flex-col min-h-[90vh] bg-transparent z-50"
      >
        <div className="pt-20 px-4 lg:ps-12 flex flex-col h-[70vh] lg:h-[80vh]">
          {links.map((link, index) => {
            const { name, url } = link;
            return (
              <Link href={url} key={index} className="overflow-hidden pb-4 my-4">
                <motion.div className= "inline-block" {...hover}>
                  <motion.p className={styles.item} onClick={() => toggleNav()} >
                    {getChars(name)}
                  </motion.p>
                  <motion.p className={styles.item} onClick={() => toggleNav()}>
                    {getChars(name)}
                  </motion.p>
                </motion.div>
              </Link>
            );
          })}

          <motion.div className="flex lg:hidden my-4" {...anim(opacity)}>
            <div className={styles.navItem}>
              <Link
                href="https://zuksky.site"
                target="_blanck"
                className="flex items-center w-28 gap-x-2 h-6 justify-between overflow-hidden"
              >
                <span className="text-white text-xs leading-tight">
                  GET IN TOUCH
                </span>

                <span className="text-white opacity-50">
                  <MoveUpRight width={16} height={16} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex flex-col h-[20vh] lg:h-[10vh] lg:flex-row lg:justify-between lg:items-center items-start gap-y-4  px-3 lg:px-10">
          <motion.div
            className="text-white font-medium text-sm"
            {...anim(popOut)}
          >
            <Link href={"/"}>HELLO@EURECAH.COM</Link>
          </motion.div>

          <div className="nav-icons flex gap-x-4">
            <motion.div className={styles.navIcons} {...anim(popOut)}>
              <Link href={"/"} onClick={() => toggleNav()}>
                <Icon1 />
              </Link>
            </motion.div>
            <motion.div className={styles.navIcons} {...anim(popOut)}>
              <Link href={"/"} onClick={() => toggleNav()}>
                <Icon2 />
              </Link>
            </motion.div>
            <motion.div className={styles.navIcons} {...anim(popOut)}>
              <Link href={"/"} onClick={() => toggleNav()}>
                <Icon3 />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
