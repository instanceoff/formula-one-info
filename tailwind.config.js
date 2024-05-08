/** @type {import('tailwindcss').Config} */
import { teamNames } from './src/utils/formulaVariables';

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    ...teamNames.flatMap((team) => [
      `to-${team}`,
      `bg-${team}`,
      `text-${team}`,
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
        RedBull: '#3671C6',
        McLaren: '#F58020',
        Ferrari: '#F91536',
        Mercedes: '#6CD3BF',
        Alpine: '#6CD3BF',
        Stake: '#C92D4B',
        Williams: '#37BEDD',
        Haas: '#B6BABD',
        RB: '#5E8FAA',
        AstonMartin: '#358C75',
        firstPlace: '#F8D31E',
        secondPlace: '#d3d3d3',
        thirdPlace: '#e88109',
        place: '#f2f2f2',
      },
    },
  },
  plugins: [],
};
