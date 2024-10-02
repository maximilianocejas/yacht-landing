/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#2E2D2C',
        'gradient': '#0D244E'
      },
      fontFamily: {
        'helvetica': ['Helvetica']
      },
      fontWeight: {
        'bold': '700',
        'semibold': '500',
        'regular': '400',
        'light': '300'
      }
    },
  },
  plugins: [],
}

