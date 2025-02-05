// data.ts
export interface SectionContent {
    title: string;
    subtitle: string;
    paragraph: string;
    imageSrc: string;
  }
  
  export interface Person {
    name: string;
    title: string;
    parents: string;
    avatar: string;
  }

  export interface Countdown {
    eventDate: string;
    formattedDate: string;
    countdownImage: string;
  }
  
  
  export interface WeddingSectionContent {
    sectionContent: SectionContent;
    groom: Person;
    bride: Person;
    backgroundImage: string;
    countdown: Countdown; 
  }
  
  export const weddingData: WeddingSectionContent = {
    sectionContent: {
      title: "بسم الله الرحمن الرحيم",
      subtitle: "Assalamu'alaikum Warahmatullaahi Wabarakaatuh",
      paragraph:
        "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.",
      imageSrc: "/assets-quotes-decor-25.png",
    },
    groom: {
      name: "Andrean Pratama, M.Pd",
      title: "Putra Sulung dari",
      parents: "Bapak M Saleh & Ibu Ernawati",
      avatar: "/avatarpria.png",
    },
    bride: {
      name: "Mutmainah, S.Pd",
      title: "Putri Kedua dari",
      parents: "Bapak Hikmah & Ibu Arfah",
      avatar: "/avatarwanita.png",
    },
    backgroundImage: "/bgSectionTwo.png",
    countdown: {
      eventDate: "2025-02-22T09:00:00+07:00",
      formattedDate: "Sabtu, 22 Februari 2025",
      countdownImage: "/blucount1.png",
    },
  };
  