"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Spline from '@splinetool/react-spline';

<link rel="icon" href="/favicon2.ico"></link>
const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/4 lg:h-full lg:w-1/2 relative rounded-lg">
        <Spline scene="https://prod.spline.design/HdEDOpqlP7cQHIvD/scene.splinecode" />        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Youth Advocate, Policy and Technology Enthusiast, Passionate Rower
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Welcome to my personal website, a fusion of innovation and creativity. With a sharp eye for aesthetics and a mastery of code, this collection highlights my diverse projects, each reflecting my unwavering commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
          <Link
          href="/portfolio">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:transform hover:scale-105 transition duration-300">
              View My Work
            </button>
  </Link>
  <Link
          href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black hover:transform hover:scale-105 transition duration-300">
              Contact Me
            </button>
          </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
