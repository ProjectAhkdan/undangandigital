'use client';
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion } from "framer-motion";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown = () => {
  const targetDate = new Date("2025-02-22T09:00:00+07:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isInView, setIsInView] = useState(false);
  const countdownRef = useRef<HTMLDivElement>(null);

  const updateTime = useCallback(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }
  }, [targetDate]);

  const formattedTime = useMemo(
    () => ({
      days: timeRemaining.days,
      hours: timeRemaining.hours,
      minutes: timeRemaining.minutes,
      seconds: timeRemaining.seconds,
    }),
    [timeRemaining]
  );

  const countdownImage = useMemo(
    () => (
      <motion.img
        src="/blucount1.png"
        alt="icon-left"
        width={150}
        height={150}
        loading="lazy"
      />
    ),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const countdownElement = countdownRef.current;
    if (countdownElement) {
      observer.observe(countdownElement);
    }

    return () => {
      if (countdownElement) {
        observer.unobserve(countdownElement);
      }
    };
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <motion.div
      ref={countdownRef}
      className="relative flex text-white font-poppins items-center justify-center max-w-md m-auto overflow-hidden bg-[#637f94] bg-noise pt-16 pb-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="absolute -left-10 top-[20%] transform -translate-y-1/2 rounded-full flex items-center justify-center -z-0"
        initial={{ rotate: 0 }}
        animate={isInView ? { rotate: [-5, 5, -5] } : {}}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ transformOrigin: "center bottom" }}
      >
        {countdownImage}
      </motion.div>

      <div className="flex flex-col items-center z-40">
        <motion.div
          className="text-5xl mb-8 font-greatvibes"
          initial={{ y: -50 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Catat Tanggalnya
        </motion.div>

        <div className="flex space-x-2 mb-6 z-40">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <motion.div
              key={index}
              className="text-xl font-semibold text-center bg-white/15 backdrop-blur-sm rounded-xl p-2 font-montserrat"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1, y: [30, 0] } : {}}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              <motion.div
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                {formattedTime[unit as keyof TimeRemaining]}
              </motion.div>
              <div className="text-sm mt-1">
                {unit === "days"
                  ? "Hari"
                  : unit === "hours"
                  ? "Jam"
                  : unit === "minutes"
                  ? "Menit"
                  : "Detik"}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-sm font-montserrat"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Sabtu, 22 Februari 2025
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Countdown;
