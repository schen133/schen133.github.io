/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {},
    extend: {
      colors: {
        bg: "#FBFBEA",
        dbg: "#121212",
        cbfont: "#05d9e8",
        cbshadow: "#005678",
        frame: "#ff2a6d",
        midnight: "#01011B",
        lavender: "#E0D9F6",
        cbpurple: "#C252E1",
        darktext: "#3B3B2E",
        mediumtext: "#474838",
        lighttext: "#5F5F4F",
        accent: "#00917C",
        lightAccent: "#7FD1AE",
        ddarktext: "#F5F5F5",
        dmediumtext: "#C9C9C9",
        dlighttext: "#969696",
      },
    },
  },
  plugins: [],
};
