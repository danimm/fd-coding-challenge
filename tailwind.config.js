/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      trade: ['Trade Gothic LT'],
      'trade-light': ['Trade Gothic LT Light'],
      'trade-bold': ['Trade Gothic LT Bold'],
      minion: ['Minion Pro Regular']
    },
    extend: {
      fontSize: {
        'header-title': '80pt',
        'header-text': '26pt',
        title: '40pt',
        normal: '16pt',
        'footer-text': '15pt',
        small: '12pt'
      },
      colors: {
        primary: '#C9A15B',
        secondary: '#CECECE',
        text: '#8C8C8C',
        'hero-bg': '#808080',
        'border-bg': '#1D1D1D',
        'slider-bg': '#0F0F0F'
      },
      screens: {
        '2xl': '1800px',
        '3xl': '2200px',
        '4xl': '2600px'
      },
      gap: '42px',
      container: {
        padding: {
          DEFAULT: '40px',
          '4xl': '500px'
        },
        screens: {
          '2xl': '1800px',
          '3xl': '2200px',
          '4xl': '2600px'
        }
      }
    }
  },
  plugins: []
}
