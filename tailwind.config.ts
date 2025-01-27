import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAwIBAYP57V4AAAAASUVORK5CYII=")',
      },

      fontFamily: {
        adam: ["Adam", "sans-serif"], // Menggunakan font lokal yang sudah didefinisikan
        poppins: ["Poppins", "sans-serif"],
        script: ["Style Script", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
