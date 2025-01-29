"use client";

import Image from "next/image";

export default function SectionOne() {
  return (
    <div className="relative flex text-white font-poppins flex-col items-center justify-center h-fit py-10 max-w-md m-auto overflow-hidden bg-[#637f94] bg-noise p-2 text-center">
      <div>
        <Image
          src="/assets-quotes-decor-25.png"
          alt="decor"
          width={500}
          height={500}
          className="mb-20"
          loading="lazy"
        />
      </div>

      <div className="font-medium text-md">
        <h1 className=" font-normal font-scheherazade text-3xl mb-3">بسم الله الرحمن الرحيم</h1>
        <h2 className="font-semibold font-montserrat">
          Assalamu&apos;alaikum Warahmatullaahi Wabarakaatuh
        </h2>
        <p className=" pt-3 font-light text-sm font-montserrat">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </p>
      </div>

      <div>
        <Image
          src="/assets-quotes-decor-25.png"
          alt="decor"
          width={500}
          height={500}
          className="rotate-180 mt-20"
          loading="lazy"
        />
      </div>
    </div>
  );
}
