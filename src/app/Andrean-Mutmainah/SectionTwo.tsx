import Image from "next/image";
import { weddingData } from "@/constans/data-dev";

type Contents = {
  content: typeof weddingData
}


const SectionTwo = ({content }: Contents) => {
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

      <div className="realtive z-10 flex flex-col">
        <div className="pt-20">
          <h1 className="text-4xl font-bold font-greatvibes text-[#45535e]">
            The Wedding Of
          </h1>
        </div>
        <div className="pt-10 relative flex justify-center overflow-hidden">
          <div className="bg-white/10 backdrop-blur-sm rounded-md shadow-sm ">
            <Image src="/avatarpria.png" alt="avatar" width={200} height={200} />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center pt-10">
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
            <Image src={content.bride.avatar} alt="avatar" width={200} height={200} />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center pt-10">
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
      </div>
    </div>
  );
}

export default SectionTwo