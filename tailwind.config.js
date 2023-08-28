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
    screens: {
      xs: '300px',
      sm: '690px',
      md: '768px',
      lg: '1024px',
      xl: '1256px',
      '2xl': '1536px',
      '3xl': '2200px',
      '4xl': '2600px'
    },
    extend: {
      fontSize: {
        'header-title': '80pt',
        'header-title-small': '60pt',
        'header-text': '26pt',
        'header-text-small': '20pt',
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
        'hero-bg-light': '#EFEFEF',
        'border-bg': '#1D1D1D',
        'slider-bg': '#0F0F0F'
      },
      gap: '42px',
      container: {
        center: true,
        padding: {
          DEFAULT: '40px',
          sm: '0',
          lg: '20px'
        }
      }
    }
  },
  plugins: []
}
