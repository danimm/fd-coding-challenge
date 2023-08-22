/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#C9A15B',
      secondary: '#CECECE',
      text: '#8C8C8C',
      'hero-bg': '#808080',
      'border-bg': '#1D1D1D',
      'slider-bg': '#0F0F0F'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1800px',
      '3xl': '2200px',
      '4xl': '2600px'
    },
    container: {
      padding: '40px',
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1800px',
        '3xl': '2200px',
        '4xl': '2600px'
      }
    },
    extend: {}
  },
  plugins: []
}
