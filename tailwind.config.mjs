/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFA431",
        lightyellow:"#FDC348",
        bluegreen:"#0B7289",
        gray:"#303030",
        input: "#727272",
      },
      fontFamily: {
        stylefont: ['Archivo', 'sans-serif'],
        textfont: ['Epilogue', 'sans-serif'],
        titlefont: ['Lexend', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.clip-triangle': {
            clipPath: 'polygon(0 0, 0% 100%, 100% 0)',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
