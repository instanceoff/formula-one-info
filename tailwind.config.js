/** @type {import('tailwindcss').Config} */
import { TeamIds } from './src/types/formulaModels';

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    ...TeamIds.flatMap((teamId) => [
      `to-formula-${teamId}`,
      `bg-formula-${teamId}`,
      `text-formula-${teamId}`,
    ]),
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
      },
      backgroundImage: {
        diagonalLines:
          'repeating-linear-gradient( 45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 2px, transparent 2px, transparent 6px )',
      },
      colors: {
        mainAccent: '#060616',
        formula: {
          1: '#3671C6',
          2: '#F58020',
          3: '#F91536',
          5: '#6CD3BF',
          13: '#6CD3BF',
          8: '#C92D4B',
          12: '#37BEDD',
          14: '#B6BABD',
          7: '#5E8FAA',
          17: '#358C75',
        },
        firstPlace: '#F8D31E',
        secondPlace: '#d3d3d3',
        thirdPlace: '#e88109',
        place: '#f2f2f2',
      },
    },
  },
  plugins: [],
};
