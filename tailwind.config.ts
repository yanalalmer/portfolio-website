import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      laptop: '976px',
      desktop: '1440px',
    },
    fontFamily: {
      lexend: ['var(--font-lexend)'],
      frank: ['var(--font-frank)'],
    },
    extend: {
      padding: {
        clamp: 'clamp(2.5em, 20vw, 10em)',
        clampMd: 'clamp(2.5em, 10vw, 10em)',
        clampSm: 'clamp(2.5em, 5vw, 10em)',
      },
      boxShadow: {
        '3xl': '0 20px 80px 0 rgba(0,0,0,.45)',
      },
      colors: {
        black: '#27282C',
        white: '#ffff',
        red: {
          DEFAULT: '#D62828',
          400: '#fc8181',
          800: '#c53030',
        },
        orange: '#FFBE41',
        grey: '#EEEE',
        darkGrey: '#7a7a7a',
        purple: {
          DEFAULT: '#6960C6',
          400: '#a000b8',
          800: '#5724ff',
        },
        blue: {
          DEFAULT: '#003efa',
          400: '#003efa',
          800: '#003efa',
        },
      },
      keyframes: {
        'scroll-ani': {
          '0%': { opacity: '1', top: '29%' },
          '15%': { opacity: '1', top: '50%' },
          '50%': { opacity: '0', top: '50%' },
          '100%': { opacity: '0', top: '29%' },
        },
      },
      animation: {
        'scroll-ani': 'scroll-ani 4s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
