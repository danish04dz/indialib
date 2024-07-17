/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backbg:'#f5f6f2',
        primary: '#2c64fc',
        secondary: '#b927fc',
      },
    },
  },
  plugins: [],
}

