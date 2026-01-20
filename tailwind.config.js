/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4B400", // Gold
        secondary: "#FF6B35", // Warm Orange
        background: "#0F0F0F", // Near Black
        card: "#1A1A1A", // Dark Card
        muted: "#DADADA", // Muted Text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
