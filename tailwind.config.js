/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        InterLi: ["InterLi"],
        InterBL: ["InterBL"],
        InterRg: ["InterRg"],
        InterMd: ["InterMd"],
        interSb: ["InterSb"],
        InterBo: ["InterBo"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
