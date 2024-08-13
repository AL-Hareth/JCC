import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blinker: {
          "0%": {
            "border-color": "transparent"
          },
          "50%": {
            "border-color": "white"
          },
          "100%": {
            "border-color": "transparent"
          }
        }
      },
      animations: {
        blinker: "blinker 1s steps(5, end) infinite",
      },
    },
    fonts: {
      terminal: ['"Terminal"', "monospace"],
      arabic: ['"Arabic Medium"', "monospace"],
    },
  },
  variants: {
    extend: {
      animation: ['before', 'after'],
    },
  },
  plugins: [],
};
export default config;
