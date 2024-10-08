"use client";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

import Logo from "../logo/logo";
import styles from "./styles.module.scss";
import Header from "./header";
import PrimaryBtn from "../primary-btn";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
      <nav className="h-full w-screen bg-transparent z-50 p-2">
        <div className="w-[95%] m-auto p-4 flex justify-between items-center z-50 h-[10vh]">
          <div className="logo">
            <Logo />
          </div>

          <div className="nav-right flex items-center justify-between gap-x-4">
            <div className="hidden md:flex">
              <PrimaryBtn />
            </div>

            <div>
              <button className={styles.button}>
                <div
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  className={styles.button}
                >
                  <div
                    className={`${styles.burger} ${
                      isActive ? styles.burgerActive : ""
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isActive && <Header toggleNav={toggleNav} />}
        </AnimatePresence>
      </nav>
  );
};

export default Navbar;
