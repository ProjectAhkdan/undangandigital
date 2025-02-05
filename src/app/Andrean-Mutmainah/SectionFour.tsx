"use client";
import { useState, useMemo } from "react";
import { IconClock } from "@tabler/icons-react";
import Image from "next/image";

export default function SectionFour() {
  const [copied, setCopied] = useState<string | null>(null);

  const bcaAccount = useMemo(() => "BCA: 7131198071 (Andrean Pratama)", []);
  const bsiAccount = useMemo(() => "BSI: 7187667148 (Mutmainah)", []);

  const copyToClipboard = async (text: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(text);
      setTimeout(() => setCopied(null), 1000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  };

  return (
    <div className="relative flex text-white font-poppins flex-col items-center h-fit mx-auto max-w-md overflow-hidden p-8 text-center">
      <Image
        src="/bgSectionTwo.png"
        alt="backgroundSampul"
        width={1080}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      /> 

      <div className="absolute -top-[5%] -left-[30%]><Image src="/puunblu2.png" alt="Kiri Atas" width={350} height={150} loading="lazy" /></div>

      <div className="absolute -top-[5%] -right-[30%] transform scale-x-[-1]">
        <Image src="/puunblu2.png" alt="Kanan Atas" width={350} height={150} loading="lazy" />
      </div>

      <div className="relative z-10 max-w-md flex flex-col h-fit py-48 w-full bg-white/15 backdrop-blur-sm border-1 shadow-lg border-black rounded-b-full rounded-t-full">
        <div className="h-full w-full text-[#45535e] flex justify-center items-center flex-col">
          <h1 className="text-5xl text-[#45535e] font-greatvibes">Akad Nikah</h1>
          <div className="w-32 h-[2px] bg-[#45535e] opacity-60 rounded-full mt-2"></div>
          <h2 className="font-montserrat pt-10 font-medium">SABTU, 22 FEBRUARI 2025</h2>
          <div className="flex gap-1 flex-row text-sm font-montserrat font-normal items-center pt-3">
            <IconClock size={20} />
            <h3>at 09:00 WIB - 11:00 WIB</h3>
          </div>
          <div className="px-2 text-sm font-montserrat font-normal items-center pt-3">
            <h3>
              Musholah Al-Hidayah, Garden City Residence, Blok G, RT.002/RW.021, Gebang Raya, Kec. Periuk, Kota Tangerang, Banten
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
          <h1 className="text-5xl text-[#45535e] font-greatvibes pt-20">Kirim Hadiah</h1>
          <div className="w-32 h-[2px] bg-[#45535e] opacity-60 rounded-full mt-2"></div>
          <h2 className="font-montserrat pt-10 font-medium px-5 text-sm text-center">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan Jika Memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </h2>
          <div className="pt-16">
            <div className="flex">
              <div className="flex flex-col space-y-3 text-sm items-center">
                <div className="flex items-center">
                  <h3>{bcaAccount}</h3>
                  <button
                    onClick={() => copyToClipboard("7131198071")}
                    className="py-1 px-5 w-fit backdrop-blur-sm border-2 border-black/10 rounded-md ml-2"
                  >
                    {copied === "7131198071" ? "Succes" : "Salin"}
                  </button>
                </div>
                <div className="flex items-center">
                  <h3>{bsiAccount}</h3>
                  <button
                    onClick={() => copyToClipboard("7187667148")}
                    className="py-1 px-5 w-fit backdrop-blur-sm border-2 border-black/10 rounded-md ml-2"
                  >
                    {copied === "7187667148" ? "Succes" : "Salin"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
