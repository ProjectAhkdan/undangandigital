import Image from "next/image";

export default function SectionFive() {
  return (
    <div className=" relative flex text-white font-poppins flex-col items-center h-screen max-w-md m-auto overflow-hidden p-8 text-center">
      <div>
        <Image
          src="/bgSectionfive.png"
          alt="backgroundSampul"
          width={1080}
          height={1920}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 flex flex-col space-y-5 bg-white/25 shadow-md shadow-black/25 px-4 rounded-md backdrop-blur-sm justify-center h-screen w-full">
        <h4 className=" text-black font-scheherazade">
          {" "}
          مِّنۡ اَنۡفُسِكُمۡ اَزۡوَاجًا لِّتَسۡكُنُوۡۤا اِلَيۡهَا وَجَعَلَ
          بَيۡنَكُمۡ مَّوَدَّةً وَّرَحۡمَةً  ؕ اِنَّ فِىۡ ذٰ لِكَ لَاٰيٰتٍ
          لِّقَوۡمٍ يَّتَفَكَّرُوۡنَ
        </h4>
        <p className="text-black font-montserrat">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berpikir.” 
        </p>
        <span className="pt-5 font-bold text-black/45">QS Ar-Rum: 21</span>
      </div>
    </div>
  );
}
