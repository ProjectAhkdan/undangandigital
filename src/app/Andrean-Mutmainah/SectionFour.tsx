"use client"
import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconClock } from "@tabler/icons-react";

export default function SectionFour() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const accountNumber = useMemo(() => "123456789101", []);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleCopyAccount = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(accountNumber)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 3000);
        })
        .catch(() => fallbackCopy(accountNumber));
    } else {
      fallbackCopy(accountNumber);
    }
  }, [accountNumber]);

  const fallbackCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error("Fallback: Copy failed", err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="relative flex text-white font-poppins flex-col items-center h-[1003px] max-w-md m-auto overflow-hidden p-8 text-center">
      <Image
        src="/bgSectionfour.jpg"
        alt="backgroundSampul"
        width={1080}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      
      <div className="absolute -top-[5%] -left-[30%]">
        <Image src="/puunblu2.png" alt="Kiri Atas" width={350} height={150} loading="lazy" />
      </div>

      <div className="absolute -top-[5%] -right-[30%] transform scale-x-[-1]">
        <Image src="/puunblu2.png" alt="Kiri Atas" width={350} height={150} loading="lazy" />
      </div>

      <div className="relative z-10 max-w-md flex flex-col h-full w-full bg-white/15 backdrop-blur-sm border-1 shadow-lg border-black rounded-b-full rounded-t-full">
        <div className="h-full w-full text-[#45535e] flex justify-center items-center flex-col">
          <h1 className="text-5xl text-[#45535e] font-greatvibes">akad nikah</h1>
          <div className="w-32 h-[2px] bg-[#45535e] opacity-60 rounded-full mt-2"></div>
          <h2 className="font-montserrat pt-10 font-medium">SABTU, 22 FEBRUARI 2025</h2>
          <div className="flex gap-1 flex-row text-sm font-montserrat font-normal items-center pt-3">
            <IconClock size={20} />
            <h3>at 09:00 WIB - 11:00 WIB</h3>
          </div>
          <div className="px-2 text-sm font-montserrat font-normal items-center pt-3">
            <h3>
              Garden City Residence, Jl. Bumi Blok I3, RT.002/RW.021, Gebang Raya, Kec. Periuk, Kota Tangerang, Banten
            </h3>
          </div>
          <div className="pt-16">
            <a
              href="https://maps.app.goo.gl/XppjBt1fEcdX7xPv5"
              className="border-1 border-black bg-white/15 shadow-md duration-100 transition-all ease-out px-9 py-2 rounded-full font-montserrat text-sm font-semibold hover:shadow-sm"
            >
              Lihat Lokasi
            </a>
          </div>
        </div>

        <div className="h-full w-full text-[#45535e] flex justify-center items-center flex-col">
          <h1 className="text-5xl text-[#45535e] font-greatvibes">Send Your Gift</h1>
          <div className="w-32 h-[2px] bg-[#45535e] opacity-60 rounded-full mt-2"></div>
          <h2 className="font-montserrat pt-10 font-medium px-5 text-sm text-center">
            Catatan kado atau kata kata terimakasih untuk yang memberikan hadiah. di menu (Amplop digital)
          </h2>
          <div className="pt-16">
            <button
              onClick={handleOpenModal}
              className="border-1 border-black bg-white/15 shadow-md duration-100 transition-all ease-out px-9 py-2 rounded-full font-montserrat text-sm font-semibold hover:shadow-sm"
            >
              Berikan Hadiah Sekarang
            </button>
          </div>

          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg w-80 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <h3 className="text-xl font-bold text-[#45535e]">Detail Rekening</h3>
                  <p className="mt-4 text-sm text-[#45535e] font-poppins">No. Rekening: {accountNumber}</p>
                  <div className="mt-4">
                    <Image
                      src="/"
                      width={150}
                      height={150}
                      alt="QR Code Rekening"
                      className="mx-auto rounded-lg shadow-md font-poppins"
                      loading="lazy"
                    />
                  </div>
                  <button
                    onClick={handleCopyAccount}
                    className="mt-4 bg-blue-500 font-poppins text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600"
                  >
                    Salin Nomor Rekening
                  </button>

                  <button
                    onClick={handleCloseModal}
                    className="mt-4 text-gray-500 font-poppins text-sm hover:text-gray-700"
                  >
                    Tutup
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isCopied && (
              <motion.div
                className="fixed bottom-4 font-poppins right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                Nomor rekening telah disalin!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute -bottom-[10%] -left-1/3">
        <Image src="/dafaf.png" alt="Kiri Bawah" width={650} height={402} loading="lazy" />
      </div>
    </div>
  );
}
