/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '120': '25rem',
        '128': '32rem'
      },
      width: {
        '110':'30rem'
      }
    },
  },
  plugins: [],
}

