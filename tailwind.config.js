/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 10s infinite',
      }
    },
  },
  plugins: [],
}

