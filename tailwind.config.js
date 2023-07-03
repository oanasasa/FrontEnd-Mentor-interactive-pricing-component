/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      'gray': '#F2F2F2',
      'text-gray': '#848EAD',
      'light-gray': '#F1F5FE',
      'light-green100': '#A4F3EB',
      'light-green200': '#80FFF3',
      'green': '#10D8C4',
      'orange': '#FF8D68',
      'blue-dark': '#293356',
      'purple': '#BECDFF',
      'white': "#fff",
      'black': '#000'
    },
    extend: {
      backgroundImage: {
        'hero-title-text': "url('/public/images/pattern-circles.svg')",
      }
    },
  },
  plugins: [],
}

