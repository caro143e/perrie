/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {     
      black: {        
        light: '#272727',        
        DEFAULT: '#212121',        
        dark: '#151515',     
      },      
      red: {        
        light: '#FFF',        
        DEFAULT: '#C84540',        
        dark: '#623533',      
  },
      white:{
        light: 'F3F3F3',
        DEFAULT:'FFF9F9',
        dark:'BAB7B7',
},
      
    extend: {},
  },
},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
