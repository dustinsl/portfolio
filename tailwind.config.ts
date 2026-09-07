import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1330",
        navyLight: "#152052",
        surface: "#F5F7FB",
        ink: "#0F172A",
        muted: "#5B6478",
        line: "#E4E8F1",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #F97316 0%, #3B82F6 100%)",
        "hero-gradient":
          "radial-gradient(1200px 600px at 15% 0%, #1E3A8A 0%, #0A1330 55%, #060A1C 100%)",
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
