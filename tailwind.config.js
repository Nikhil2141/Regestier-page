/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body:['Open Sans']
      },
      colors: {
        'primary-color': '#4B006E',
        'Tableheading-color':'#5D6166'
      },
    },
  },
  plugins: [],
}
