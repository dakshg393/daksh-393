/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#0A192F",
        primaryText: "#CCD6F6",
        secondaryText: "#8892B0",
        themeBlue: "#64FFDA",

     
      },
      fontFamily: {
        fontHeading: "Poppins, sans-serif",
        fontParagraph: "Mulish, sans-serif"
      },
      
      fontSize: {
        mainText:"50px",
        sectionHeading:"30px ",
        miniprojectHeading:"25px "
        
      },

    


      keyframes: {
        rotateFocus: {
          "0%": {
            borderRadius: "40% 50% 60% 40% / 60% 30% 70% 40%"
          },
          "100%": {
            borderRadius: "40% 60%"
          }
        },
      },
    animation: {
      rotateFocus: 'rotateFocus 4s ease-in-out infinite both alternate',
    },

      
    },
  },
  plugins: [],
}

