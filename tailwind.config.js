/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1000px'
      },
      colors: {
        primary: {
          purple: 'hsl(259, 100%, 65%)',
          lightRed: 'hsl(0, 100%, 67%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          offWhite: 'hsl(0, 0%, 94%)',
          lightGrey: 'hsl(0, 0%, 86%)',
          smokeyGrey: 'hsl(0, 1%, 44%)',
          offBlack: 'hsl(0, 0%, 8%)',
        },
      },
      fontSize: {
        bodyCopy: '32px',
      },
      fontWeight: {
        '400i': '400',
        '700': '700',
        '800i': '800',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

