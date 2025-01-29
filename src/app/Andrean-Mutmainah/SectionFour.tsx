"use client"
import Image from "next/image";
import { IconClock } from "@tabler/icons-react";

export default function SectionFour() {
  return (
    <div className="relative flex text-white font-poppins flex-col items-center h-fit m-auto overflow-hidden p-8 text-center">
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
              Garden City Residence, Blok G, RT.002/RW.021, Gebang Raya, Kec. Periuk, Kota Tangerang, Banten
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
          <h1 className="text-5xl text-[#45535e] font-greatvibes pt-20">Send Your Gift</h1>
          <div className="w-32 h-[2px] bg-[#45535e] opacity-60 rounded-full mt-2"></div>
          <h2 className="font-montserrat pt-10 font-medium px-5 text-sm text-center">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan Jika Memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </h2>
          <div className="pt-16">
            <div className=" flex">
              <div className="flex flex-col space-y-3 text-sm items-center">
                <h3>BCA: 7131198071 (Andrean Pratama)</h3>
                <a href="" className=" py-1 px-5 w-fit backdrop-blur-sm border-2 border-black/10 rounded-md">Salin </a>
                <h3>BSI: 7187667148 (Mutmainah)</h3>
                <a href="" className=" py-1 px-5 w-fit backdrop-blur-sm border-2 border-black/10 rounded-md">Salin </a>
              </div>
            </div>
          </div>

    
        </div>
      </div>

      <div className="absolute -bottom-[10%] -left-1/3">
        <Image src="/dafaf.png" alt="Kiri Bawah" width={650} height={402} loading="lazy" />
      </div>
    </div>
  );
}
