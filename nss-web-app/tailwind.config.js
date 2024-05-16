/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cyan-blue': '#6fc3df',
        'violet-purple': '#8d82c4',
        'orange-red': '#ec8d81',
        'yellow-gold': '#e7b788',
        'blue-indigo': '#8ea9e8',
        'green-light': '#87c5a4'
      },
    },
  },
  plugins: [],
}

