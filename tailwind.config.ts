import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5631",
        secondry: "#1e1e1e",
        darkColor: "#0d0d0d",
        borderColor: "#8c8271",
        checkColor: "#57cb4c",
        textColor: "#cebea4",
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
