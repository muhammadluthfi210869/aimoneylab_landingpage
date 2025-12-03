/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        charcoal: '#0a0a0a',
        gold: {
          50: '#FFFEF7',
          100: '#FFFAEB',
          200: '#FFF3C4',
          300: '#FCE588',
          400: '#FADB5F',
          500: '#F7C948',
          600: '#D4A017',
          700: '#B8860B',
          800: '#8B6914',
          900: '#6B5416',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
