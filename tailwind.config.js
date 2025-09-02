/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ff6333',
      },
      backgroundColor:{
        primary:'#ff6333',
      }
    },
  },
  plugins: [],
}

