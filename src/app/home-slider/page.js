"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { dwarkacab } from "../../../public/Images/page";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const HomeSlider = () => {
  return (
    <motion.div
      className="bg-lightyellow before:h-full overflow-hidden main-slider before:right-0 relative wave-container"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="lg:max-w-[1440px] px-[20px] m-auto">
        <div className="sm:h-[100vh] flex md:flex-row flex-col justify-center items-center py-[30px]">
          <motion.div className="md:w-[50%] w-[100%] relative z-[99]" variants={itemVariants}>
            <h1 className="lg:text-[45px] text-[45px]  text-white font-bold font-titlefont mb-[15px]">
              Reserve your taxi from any location in{" "}
              <motion.span
                style={{ display: "inline-block" }}
                animate={{ color: "#00a6a6", scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Dwarka!
              </motion.span>
            </h1>

            <p className="text-[18px] font-textfont main-slider-content">
              Looking for reliable taxi services in Dwarka?{" "}
              <b>AtoZ Cab Dwarka</b> offers a seamless and comfortable experience
              for all your travel needs. Book your taxi now and travel hassle-free!
            </p>

            <motion.div variants={itemVariants}>
              <Link
                href="/"
                className="custom-book-taxi2 inline-block mt-[30px] bg-bluegreen "
              >
                Discover More About AtoZ Cabs in Dwarka
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <div className="w-[50%]" >
            <Image
              src={dwarkacab}
              alt="AtoZ Cab Dwarka - Book your taxi for a safe and comfortable ride"
              className="w-full h-auto relative z-[999] text-car-slider"
              width={500}
              height={500}
              loading="lazy"
            />

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeSlider;
