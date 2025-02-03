import { weddingData } from "@/constans/data-dev";
import Image from "next/image";

type Contents = {
  content: typeof weddingData;
};

const SectionOne = ({ content }: Contents) => {
  return (
    <div className="relative flex text-white font-poppins flex-col items-center justify-center h-fit py-10 max-w-md m-auto overflow-hidden bg-[#435361] bg-noise p-2 text-center">
      <div>
        <Image
          src={content.sectionContent.imageSrc}
          alt="decor"
          width={500}
          height={200}
          className="mb-20"
          loading="lazy"
          layout="responsive"
        />
      </div>

      <div className="font-medium text-md">
        <h1 className=" font-normal font-scheherazade text-2xl mb-3">
          {content.sectionContent.title}
        </h1>
        <h2 className="font-semibold font-montserrat text-sm">
          {content.sectionContent.subtitle}
        </h2>
        <p className=" pt-3 font-light text-sm font-montserrat">
          {content.sectionContent.paragraph}
        </p>
      </div>

      <div>
        <Image
          src={content.sectionContent.imageSrc}
          alt="decor"
          width={500}
          height={500}
          className="rotate-180 mt-20"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SectionOne;
