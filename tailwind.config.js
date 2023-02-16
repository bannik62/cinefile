/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shark: {
          '50': '#f6f7f7',
          '100': '#e0e5e7',
          '200': '#c0cbcf',
          '300': '#99a8af',
          '400': '#74848d',
          '500': '#596973',
          '600': '#46535b',
          '700': '#3b444a',
          '800': '#32383d',
          '900': '#222629',
          'text':'#86C232',
          'bg'  :'#6B6E70',
          'secondary':'#6B6E70',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

