import Image from "next/image";

export default function SectionFive() {
  return (
    <div className=" relative flex text-white font-poppins flex-col items-center h-screen max-w-md m-auto overflow-hidden  text-center">
      <div>
        <Image
          src="/bgSectionFive.png"
          alt="backgroundSampul"
          width={1080}
          height={1920}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 flex flex-col space-y-5 px-4 rounded-md justify-center h-screen w-full">
        <h4 className=" text-black font-scheherazade text-xl">
          وَمِنۡ اٰيٰتِهٖۤ اَنۡ خَلَقَ لَكُمۡ مِّنۡ اَنۡفُسِكُمۡ اَزۡوَاجًا لِّتَسۡكُنُوۡۤا اِلَيۡهَا وَجَعَلَ بَيۡنَكُمۡ مَّوَدَّةً وَّرَحۡمَةً  ؕ اِنَّ فِىۡ ذٰ لِكَ لَاٰيٰتٍ لِّقَوۡمٍ يَّتَفَكَّرُوۡنَ
        </h4>
        <p className="text-black font-montserrat text-sm">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berpikir.” 
        </p>
        <span className="pt-5 font-bold text-black/45">QS Ar-Rum: 21</span>
      </div>
      <div className="relative z-10 flex flex-col space-y-5 shadow-md  bg-white/10 backdrop-blur-md px-4 justify-center h-10 w-full">
        <h3 className="text-black/70 text-sm font-normal">Buat Undanganmu, <a className="text-red-600 font-semibold" target="_blank" href="https://wa.me/628817224077?text=Saya%20mau%20buat%20Undangan%20Digital">Klik disini </a></h3>
      </div>
    </div>
  );
}
