import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        bg: "var(--color-bg)",
        bgOffset: "var(--color-bg-offset)",
        text: "var(--color-text)",
        textOffset: "var(--color-text-offset)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        primaryOffset: "var(--color-primary-offset)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
