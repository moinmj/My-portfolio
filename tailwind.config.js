/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#14b8a6",
        dark: "#0f172a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // 👈 Added Google Font
      },
    },
  },
  plugins: [],
};


