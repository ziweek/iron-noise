const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // NextUI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // default: "#CCE3FD",
        // danger: "#FDD0DF",
        primary: "#005BC4",
        // primary: {
        //   50: "#1D4A8325",
        //   300: "#1D4A8330",
        //   500: "#1D4A8350",
        //   750: "#1D4A8375",
        //   DEFAULT: "#1D4A83",
        // },
        secondary: "#F4F4F5",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar-hide"),
    nextui({
      addCommonColors: true,
      // themes: {
      //   light: { colors: { primary: "#006FEE" } },
      //   dark: { colors: { primary: "#006FEE" } },
      // },
    }),
  ],
};
export default config;
