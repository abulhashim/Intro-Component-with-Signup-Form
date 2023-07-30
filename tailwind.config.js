/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('./images/bg-intro-desktop.png')",
        mobile: "url('./images/bg-intro-mobile.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-seris"],
      },
      colors: {
        Red: "hsl(0, 100%, 74%)",
        Green: "hsl(154, 59%, 51%)",
        Blue: "hsl(248, 32%, 49%)",
        darkBlue: "hsl(249, 10%, 26%)",
        grayishBlue: "hsl(246, 25%, 77%)",
      },
      borderWidth: {
        1: "1px",
      },
      maxWidth: {
        "5.5xl": "70rem",
      },
      fontSize: {
        smaller: "11px",
      },
    },
  },
  plugins: [],
};
