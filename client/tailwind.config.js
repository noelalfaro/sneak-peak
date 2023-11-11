/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      width: {
        '128': '32rem',
        '256': '64rem',
      },
      height: {
        '128': '32rem',
        '256': '64rem',
      }
    },
  },
  plugins: [],
}

