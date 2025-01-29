'use client';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from 'lenis';
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionFive from "./SectionFive";

const Letter = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleStart = () => {
    if (audioRef.current && !hasPlayed) {
      audioRef.current.play();
      setHasPlayed(true);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      const handleScroll = () => {
        if (audioRef.current && !hasPlayed) {
          audioRef.current.play();
          setHasPlayed(true);
        }
      };

      const scrollNode = scrollRef.current;
      scrollNode.addEventListener("scroll", handleScroll);

      return () => {
        lenis.destroy();
        scrollNode.removeEventListener("scroll", handleScroll);
      };
    }
  }, [hasPlayed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="scroll-smooth"
      ref={scrollRef}
    >
      <button style={{ display: 'none' }} onClick={handleStart} />
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <audio ref={audioRef} src="/sound/pernikahan-kita.mp3" preload="auto" autoPlay />
    </motion.div>
  );
};

export default Letter;
