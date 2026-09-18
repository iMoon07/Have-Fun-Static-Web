/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxRed: "#FF003C",
        subRed: "#E63946",
        techGray: "#F8F9FA",
        gold: "#FFCC33",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        exo: ["Exo", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 0, 60, 0.5), 0 0 20px rgba(255, 0, 60, 0.3)",
        goldGlow: "0 0 10px rgba(255, 204, 51, 0.5)",
      },
    },
  },
  plugins: [],
}
