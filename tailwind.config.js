/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FFCE1A',
        'secondary':'#0D0842',
        'blackBG':'#F3F3F3',
        'Favorite':'#FF5841',
         'Third':'#f8fafc',
         'navy':'#818cf8',
         'yellow':'#fbbf24',
         'dark':'#0a0a0a'
      },
      fontFamily:{
        'primary':["Montserrat", "sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

