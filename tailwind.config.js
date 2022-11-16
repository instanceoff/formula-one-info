/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        f1Teams: {
          1: '#3671C6',
          2: '#F58020',
          3: '#F91536',
          5: '#6CD3BF',
          13: '#6CD3BF',
          18: '#C92D4B',
          12: '#37BEDD',
          14: '#B6BABD',
          7: '#5E8FAA',
          17: '#358C75',
        },
      },
    },
  },
  plugins: [],
};
