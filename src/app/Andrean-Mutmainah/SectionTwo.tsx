"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import NameParameter from "@/components/NameParameter";

export default function SectionTwo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (inView) setImagesLoaded(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative flex text-white font-poppins flex-col items-center h-[1593px] max-w-md m-auto overflow-hidden p-8 text-center"
    >
      {imagesLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/bgsection2.jpg"
            alt="backgroundSampul"
            width={1080}
            height={1920}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col h-screen w-full">
        {imagesLoaded && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute -left-14 top-3/4 transform -translate-y-1/2 z-20"
          >
            <Image
              src="/blucount1.png"
              alt="icon-left"
              width={150}
              height={150}
              loading="lazy"
            />
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-[#2a374a] font-semibold text-3xl font-greatvibes">
            The Widding Of
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute -right-14 top-3/4 transform -translate-y-1/2 z-20"
          >
            <Image
              src="/phnb.png"
              alt="icon-right"
              width={150}
              height={150}
              loading="lazy"
            />
            <Image
              src="/jkj.png"
              alt="icon-right"
              width={150}
              height={150}
              loading="lazy"
            />
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute top-[12%] w-full text-center z-30"
          >
            <Image
              src="/bingkai.png"
              alt="bingkai"
              width={1000}
              height={500}
              loading="lazy"
            />
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute top-[50%] w-full text-center z-30"
          >
            <h3 className="text-3xl font-semibold pt-5 font-greatvibes text-[#2a374a]">
              Andrean Pratama, M.Pd
            </h3>
            <h4 className="text-sm pt-4 text-[#2a374a] font-montserrat font-bold">
              Putra Sulung dari
              <div className="pt-3">
                <p className="font-medium">Bapak M Saleh &</p>
                <p className="font-medium">Ibu Ernawati</p>
              </div>
            </h4>
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute top-[75%] w-full text-center z-30 font-greatvibes"
          >
            <h1 className="text-6xl text-[#2a374a]">&</h1>
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="absolute top-[80%] w-full text-center z-30"
          >
            <Image
              src="/bingkai.png"
              alt="bingkai"
              width={1000}
              height={500}
              loading="lazy"
            />
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="absolute top-[120%] w-full text-center z-30"
          >
            <h3 className="text-3xl font-semibold pt-5 font-greatvibes text-[#2a374a]">
              Mutmainah, S.Pd
            </h3>
            <h4 className="text-sm pt-4 text-[#2a374a] font-montserrat font-bold">
              Putri kedua dari
              <div className="pt-3">
                <p className="font-medium">Bapak Hikmah &</p>
                <p className="font-medium">Ibu Arfah</p>
              </div>
            </h4>
          </motion.div>
        )}

        {imagesLoaded && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="absolute top-[150%] w-full text-center z-30"
          >
            <h2 className="text-sm pt-0 text-[#2a374a] font-normal font-montserrat">
              Merupakan kehormatan serta kebahagiaan bagi kami sekeluarga
              apabila Bapak/Ibu/Saudara/i{" "}
              <span className="font-bold">
                <NameParameter />
              </span>{" "}
              berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
            </h2>

            <h4 className="text-sm pt-4 text-[#2a374a] font-montserrat font-semibold">
              Jazakumullah Khairan Katsiran Wassalamuallaikum Warrahmatullahi
              Wabarakatuh
              <div className="pt-3">
                <p className="font-medium">Kami yang berbahagia,</p>
                <h3 className="text-3xl font-extralight pt-5 font-greatvibes text-[#2a374a]">
                  Andrean & Mutmainah
                </h3>
                <p className="font-medium">
                  Beserta keluarga besar kedua mempelai{" "}
                </p>
              </div>
            </h4>
          </motion.div>
        )}
      </div>
    </div>
  );
}
