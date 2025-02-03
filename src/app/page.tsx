"use client";

import { Suspense } from "react";
import Image from "next/image";
import NameParameter from "@/components/NameParameter";
import { useSearchParams } from "next/navigation";
import { IconMail, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";

const leafAnimationTopRight = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const leafAnimationBottomLeft = {
  animate: {
    y: [0, 0, 0],
    rotate: [-180, -170, -180],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function HomeContent() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  return (
    <div className="relative flex flex-col max-w-md m-auto overflow-hidden h-fit">
      <Image
        src="/backgroundSampul.png"
        alt="backgroundSampul"
        width={1080}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-md flex flex-col h-screen">
        <div className="absolute top-[16%] w-full text-center z-30">
          <h1 className="text-xl font-semibold text-[#2a374a] font-scheherazade">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h1>
        </div>
        <div className="absolute top-[26%] w-full text-center z-30">
          <h2 className=" text-7xl font-medium text-[#2a374a] font-greatvibes">
            Andrean
          </h2>
          <h2 className=" text-5xl font-medium text-[#2a374a] font-greatvibes">
            &
          </h2>
          <h2 className=" text-7xl font-meidum text-[#2a374a] font-greatvibes">
            Mutmainah
          </h2>
          <div className=" w-full flex flex-col justify-center items-center pt-20">
            <h3 className="text-sm flex px-4 py-1 gap-2 font-semibold rounded-full font-meidum text-[#2a374a] font-montserrat">
              Kpd. Bpk/Ibu/Saudara/i
            </h3>
            <h3 className="text-xs items-center flex px-4 py-1 gap-2 font-semibold mb-5 rounded-full bg-blue-300/30 backdrop-blur-sm font-meidum text-[#3d6299] font-montserrat">
              <IconUser size={20} color="#2a374a" />
              <NameParameter />
            </h3>
            <a
              className="w-2/4 h-10 font-montserrat text-sm gap-2 text-[#2a374a] bg-white/20 flex justify-center items-center backdrop-blur-sm border border-transparent rounded-2xl hover:shadow-lg shadow-sm transition duration-200 shadow-black/30 font-semibold"
              href={`/Andrean-Mutmainah?to=${to || "All"}`}
            >
              <IconMail size={20} color="#2a374a" />
              Buka Undangan
            </a>
          </div>
        </div>

        <motion.img
          src="/elementkananatas.png"
          alt="rantingkayu"
          width={1080}
          height={540}
          className="absolute -top-[10%] -right-[50%] transform rotate-[30deg] "
          {...leafAnimationTopRight}
        />

        <motion.img
          src="/elementkananatas.png"
          alt="rantingkayu"
          width={1080}
          height={540}
          className="absolute -bottom-[10%] -left-[50%] transform rotate-[-150deg] "
          {...leafAnimationBottomLeft}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
