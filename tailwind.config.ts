import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1116",
        panel: "#171B22",
        panel2: "#1D222B",
        hairline: "#2A3038",
        bone: "#E9E6DD",
        muted: "#8D95A3",
        signal: "#E8A34A",
        signaldim: "#7A5A2E",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        mono: ["var(--font-plexmono)", "monospace"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
