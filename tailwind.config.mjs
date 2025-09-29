// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html",
//   "./src/**/*.{js,jsx,ts,tsx}",
// ];

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#18003E',
          900: '#400799',
          800: '#5509CC',
          700: '#6A0BFF',
          600: '#883CFF',
          500: '#A66DFF',
          400: '#C39DFF',
          300: '#D2B6FF',
          200: '#E1CEFF',
          100: '#F0E7FF',
        },
        error: {
          900: '#880727',
          800: '#AF0932',
          700: '#D50B3E',
          600: '#F3164E',
          500: '#F53D6B',
          400: '#F76489',
          300: '#F98BA6',
          200: '#FBB1C4',
          100: '#FDD8E1',
        },
        warning: {
          900: '#FAAF00',
          800: '#FFC233',
          700: '#FFCE5C',
          600: '#FFDA85',
        },
        success: {
          900: '#17663A',
          800: '#1E874C',
          700: '#26A95F',
          600: '#2DCA72',
        },
        neutral: {
          900: '#191919',
          800: '#303030',
          700: '#474747',
          600: '#5E5E5E',
          500: '#757575',
          400: '#8C8C8C',
          300: '#A3A3A3',
          200: '#BABABA',
          100: '#D1D1D1',
          50: '#E8E8E8',
          25: '#F4F4F4',
        },
        white: {
          900: '#FFFFFF',
        },
      },
    },
  },
  plugins: []
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
