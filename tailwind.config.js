import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        darkC: 'rgba(17, 17, 17, 0.5)',
        grayC: '#444444',
        redC: '#DA0037',
        lightC: '#EDEDED',
        shadow: '#F93827',
        greenE: '#77D970',
        yellowE: '#FFC300',
        purpleE: '#9772FB',
        redE: '#F55050',
        blueE: '#5463FF'
        
      },
      backgroundImage: {
        laravel: 'linear-gradient(to bottom right, #F55050 -20%, #2F3645 80%)',
        darkCAlpha: 'rgba(23, 23, 23, 0,6)',
      },
    },
  },
  plugins: [
    scrollbarHide
  ],
};
