'use client';

import { Suspense } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import NameParameter from "@/components/NameParameter";
import { useSearchParams } from "next/navigation";
import { IconMail, IconUser } from "@tabler/icons-react";

function HomeContent() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  return (
    <div className="relative flex flex-col max-w-md m-auto overflow-hidden">
      <Image
        src="/backgroundSampul.png"
        alt="backgroundSampul"
        width={1080}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-md flex flex-col h-screen">
        <div className="absolute top-[16%] w-full text-center z-30">
          <h1 className="text-xl font-semibold text-[#2a374a]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h1>
        </div>
        <div className="absolute top-[26%] w-full text-center z-30">
          <h2 className=" text-7xl font-medium text-[#2a374a] font-greatvibes">
            Andrean
          </h2>
          <h2 className=" text-5xl font-medium text-[#2a374a] font-greatvibes">&</h2>
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
              className="w-2/4 h-10 font-montserrat text-sm gap-2 text-[#2a374a] bg-white/20 flex justify-center items-center backdrop-blur-sm border border-transparent rounded-2xl hover:shadow-lg transition duration-200 shadow-black font-semibold"
              href={`/Andrean-Mutmainah?to=${to || "All"}`}
            >
              <IconMail size={20} color="#2a374a" />
              Buka Undangan
            </a>
          </div>
        </div>

        <Image
          src="/gapuraislamic.png"
          alt="gapuraislamic"
          width={1080}
          height={540}
        />

        <Image
          src="/rumput-bawah.png"
          alt="rumput-bawah"
          width={400}
          height={300}
          className="absolute bottom-0 left-0 w-full"
        />

        <Image
          src="/rumput-bawah.png"
          alt="rumput-kanan"
          width={1080}
          height={300}
          className="absolute bottom-0 right-0 w-full transform scale-x-[-1]"
        />

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[30%] top-[26%] transform -translate-y-1/2 z-20"
        >
          <Image
            src="/cloud-megamendung.png"
            alt="megamendung kiri"
            width={200}
            height={200}
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[30%] top-[50%] transform -translate-y-1/2 z-20"
        >
          <Image
            src="/cloud-megamendung-right.png"
            alt="megamendung kanan"
            width={200}
            height={200}
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 2, -2, 1, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[30%] top-1/2 transform -translate-y-1/2 z-10"
        >
          <Image
            src="/cover-flower-one.png"
            alt="bunga kiri"
            width={200}
            height={200}
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, -2, 2, -1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[30%] top-1/2 transform -translate-y-1/2 z-10"
        >
          <Image
            src="/cover-flower-one-right.png"
            alt="bunga kanan"
            width={200}
            height={200}
          />
        </motion.div>
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
