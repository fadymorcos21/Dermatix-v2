/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f6f1e7",
        cream: "#ece3d2",
        sand: "#d9ccb4",
        stone: "#8a7b63",
        clay: "#6b5c47",
        ink: "#17150f",
        char: "#252119",
        moss: "#2f3a2e",
        gold: "#b5986a",
        champagne: "#d9c4a1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        wider2: "0.14em",
        wider3: "0.22em",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9" }],
        "12xl": ["14rem", { lineHeight: "0.88" }],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 1.1s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fadeIn 1.4s ease both",
        "scale-in": "scaleIn 1.2s cubic-bezier(0.22,1,0.36,1) both",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(36px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(1.06)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "30%": { transform: "translate(3%,-15%)" },
          "50%": { transform: "translate(12%,9%)" },
          "70%": { transform: "translate(9%,4%)" },
          "90%": { transform: "translate(-1%,7%)" },
        },
      },
    },
  },
  plugins: [],
};
