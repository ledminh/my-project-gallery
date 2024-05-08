import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "1": "#eaddd5",
        "2": "#e38040",
        "3": "#d75404",
      },
      secondary: "#674F36",
    },
  },
  plugins: [],
};
export default config;
