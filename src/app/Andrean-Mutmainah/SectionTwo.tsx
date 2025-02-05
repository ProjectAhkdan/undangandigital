import Image from "next/image";
import { weddingData } from "@/constans/data-dev";
import NameParameter from "@/components/NameParameter";

type Contents = {
  content: typeof weddingData;
};

const SectionTwo = ({ content }: Contents) => {
  return (
    <div className="relative flex font-poppins flex-col items-center h-fit mx-auto max-w-md overflow-hidden p-8 text-center">
      <Image
        src={content.backgroundImage}
        alt="backgroundSampul"
        width={1080}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      <div className="realtive z-10 flex flex-col pt-20 pb-20">
          <h1 className="text-4xl font-bold font-greatvibes text-[#45535e]">
            Walimatul 'ursy
          </h1>
        <div className="pt-10 relative flex justify-center overflow-hidden">
          <div className="bg-white/10 backdrop-blur-sm rounded-md shadow-sm ">
            <Image
              src="/avatarpria.png"
              alt="avatar"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center pt-1">
          <h1 className="text-[#45535e] font-greatvibes text-3xl font-semibold">
            {content.groom.name}
          </h1>
          <h2 className="font-montserrat font-bold text-[#45535e] text-sm ">
            {content.groom.title}
          </h2>
          <p className="font-montserrat font-medium w-32 text-[#45535e]">
            {content.groom.parents}
          </p>
        </div>

        <div className="pt-10 relative flex justify-center overflow-hidden">
          <div className="bg-white/10 backdrop-blur-sm rounded-md shadow-sm ">
            <Image
              src={content.bride.avatar}
              alt="avatar"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center pt-1">
          <h1 className="text-[#45535e] font-greatvibes text-3xl font-semibold">
            {content.bride.name}
          </h1>
          <h2 className="font-montserrat font-bold text-[#45535e] text-sm ">
            {content.bride.title}
          </h2>
          <p className="font-montserrat font-medium w-32 text-[#45535e]">
            {content.bride.parents}
          </p>
        </div>
        <div className="pt-10 text-sm">
          <div className="flex flex-col justify-center items-center text-black/80 font-montserrat">
            Merupakan Kehormatan serta kebahagiaan bagi kami sekeluarga apabila
            Bapak/Ibu/Saudara/i
            <h3 className="text-xs items-center flex px-4 py-1 m-3 w-fit font-semibold rounded-full bg-blue-300/30 backdrop-blur-sm font-meidum text-[#3d6299] font-montserrat">
              <NameParameter />
            </h3>
            berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </div>
          <div className="flex flex-col gap-4 font-montserrat pt-6">
            <h4 className="font-bold">Jazakumullah khairan katsiran Wassalamuallaikum Warrahmatullahi Wabarakatuh</h4>
            <h5 >Kami yang berbahagia,</h5>
            <h6 className="font-greatvibes text-4xl">Andrean &amp; Mutmainah</h6>
            <p>Beserta Keluarga Besar Kedua Mempelai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
