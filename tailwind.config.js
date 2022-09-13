/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#2D89FF",
                  
          "secondary": "#642DFF",
                  
          "accent": "#37CDBE",
                  
          "neutral": "#FFFFFF",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#575757",
                  
          "success": "#1E1E1E",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"),require('tw-elements/dist/plugin')],
}
