/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
      },
      animation: {
        marquee: "marquee var(--marquee-speed,16s) linear infinite",
        twinkle: "twinkle 1.2s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 80%, 100%": { 
            opacity: "0.2", 
            transform: "scale(var(--star-scale, 1))",
          },
          "90%": { 
            opacity: "1", 
            transform: "scale(calc(var(--star-scale, 1) * 1.5))",
          },
        },
      },
    },
  },
  plugins: [],
}
