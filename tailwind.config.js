/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        card: "var(--card)",
        "card-hover": "var(--card-hover)",
        // legacy aliases
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
      },
      borderColor: {
        line: "var(--line)",
      },
      animation: {
        marquee: "marquee var(--marquee-speed,16s) linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
