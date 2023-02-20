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
        light: '#CAC2C1',        
        DEFAULT: '#C84540',        
        dark: '#623533',      
  },
    extend: {},
  },
},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
