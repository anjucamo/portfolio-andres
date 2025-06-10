/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 Esto va aquí, no dentro de content
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

