/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { raw: "(max-width: 450px)" },
        mediumPhone: { raw: "(max-width: 376px)" },
        fablet: { raw: "(max-width:620px)" },
        PhoneLand: { raw: "(max-height: 427px)" },
      },
      fontFamily: {
        manifestoTitle: ["groundHeavy"],
        theGoodTitle: ["Fira_Sans_Condensed"],
      },
    },
  },
  plugins: [],
};
