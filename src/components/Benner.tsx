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
      className="z-[9999] gap-2 fixed flex w-full bottom-0  font-montserrat "
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : 1000 }} 
      transition={{ type: "spring", stiffness: 200, damping: 50, mass: 1, velocity: 5, ease: "easeInOut" }}
    >
      <div className="relative flex justify-center items-center gap-4 mx-auto max-w-md w-full shadow-[0_-2px_5px_rgba(0,0,0,0.3)] bg-gray-200/35 backdrop-blur-sm overflow-hidden py-3 rounded-t-md">
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
      <p className="font-semibold text-xs">👈Click Here</p>
      </div>
    </motion.div>
  );
}
