"use client";
import React, { useEffect, useState } from "react";

import Lenis from "@studio-freight/lenis";
import { motion , AnimatePresence, LayoutGroup } from "framer-motion";

import Hero from "./hero";
import Navbar from "./components/navbar/navbar";
import { anim, popIn } from "./components/anim/anim";
import About from "./components/pages/about";
import Featured from "./components/pages/feature";
import About2 from "./components/pages/about2";
import HeroBanner from "./hero-banner";
import Featured2 from "./components/pages/featured2";
import Team from "./components/pages/team";
import Footer from "./components/footer";
import Loading from "./loading";

export default function Home() {
  const [dimensions, setDimensions] = useState({width:0, height: 0});

  const updateDimensions = () => {
    const { innerWidth, innerHeight } = window;
    setDimensions({width: innerWidth, height: innerHeight})
  }



  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions)
  }, []);

  const [loading, setLoading] = React.useState(true);


  return (
    <LayoutGroup >
      <AnimatePresence mode="wait">
      {loading ? (
        dimensions.height > 0 && <Loading dimensions={dimensions}/> 
      ) : (
        <div>
          <motion.main className="h-full z-20 relative" layout>
            <motion.div className="fixed left-0 top-0 z-50" {...anim(popIn)}>
              <Navbar />
            </motion.div>

            <div className="w-screen h-full">
              <div className="w-screen h-screen sticky top-0 left-0">
                <Hero />
              </div>
              <div className="w-screen h-full bg-black sticky top-0 left-0">
                <About />
              </div>
            </div>

            <div className="h-[400vh] w-screen">
              <Featured />
            </div>

            <div className="h-full w-screen">
              <About2 />
            </div>

            <div className="h-full w-screen">
              <HeroBanner />
            </div>

            <div className="h-full w-screen">
              <Featured2 />
            </div>

            <div className="w-screen h-full bg-black">
              <Team />
            </div>
          </motion.main>

          <div className="w-screen h-screen "></div>

          <div className="h-screen w-screen fixed bottom-0 z-0">
            <Footer />
          </div>
        </div>
      )}
    </AnimatePresence>
    </LayoutGroup>
  );
}
