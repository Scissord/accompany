import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dbg': "#4f4f4f",
        'gbg': "#7C7C7C",
        'brand-100': "#1D3F64",
        'brand-200': "#41607F",
        'brand-300': "#03355a",
        'hvr': "#a1a1aa",
      },
      backgroundSize: {
        '43%': '43%',
        '50%': '50%',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.fijb': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
        },
        '.fijc': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.fije': {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'end',
        },
      };
      addUtilities(newUtilities);
    }
  ],
}

export default config;