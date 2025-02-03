import type { Metadata } from "next";
import "./globals.css";
import Benner from "@/components/Benner";

export const metadata: Metadata = {
  title: "Undangan Pernikahan Andrean & Mutmainah",
  description: "Undangan pernikahan online Andrean & Mutmainah pada Sabtu, 25 Februari 2025. Informasi lengkap tentang acara pernikahan, lokasi, dan hadiah digital.",
  keywords: ["undangan pernikahan", "pernikahan Andrean & Mutmainah", "undangan digital", "hadiah pernikahan", "acara pernikahan", "wedding invitation"],
  openGraph: {
    title: "Undangan Pernikahan Andrean & Mutmainah",
    description: "Jangan lewatkan momen istimewa pernikahan Andrean & Mutmainah. Semua informasi yang perlu Anda ketahui ada di sini.",
    url: "https://www.undangan-pernikahan-andrean-mutmainah.com",
    siteName: "Undangan Pernikahan Andrean & Mutmainah",
    images: [
      {
        url: "https://www.undangan-pernikahan-andrean-mutmainah.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Andrean & Mutmainah",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@andreanmutmainah",
    title: "Undangan Pernikahan Andrean & Mutmainah",
    description: "Pernikahan Andrean & Mutmainah, Sabtu, 25 Februari 2025. Semua informasi tentang acara, lokasi, dan hadiah ada di sini.",
    images: "https://www.undangan-pernikahan-andrean-mutmainah.com/images/twitter-card.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Benner />
      </body>
    </html>
  );
}
