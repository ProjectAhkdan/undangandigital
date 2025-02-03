"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RotatingText from "./ui/textRotating";

export default function Benner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition === 500 || scrollPosition < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="z-[9999] gap-2 fixed flex w-full bottom-0 justify-center items-center text-center font-montserrat bg-gray-200 overflow-hidden py-3 rounded-t-md"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : 1000 }} 
      transition={{ type: "spring", stiffness: 200, damping: 50, mass: 1, velocity: 5, ease: "easeInOut" }}
    >
      <h1 className="text-black font-bold text-xs">Created by</h1>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <RotatingText
          texts={["Adan", "Creative", "Elegant", "Efficient"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-[#45535e] font-bold text-white text-xs overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </a>
      <p className="font-medium text-xs">Click Here</p>
    </motion.div>
  );
}
