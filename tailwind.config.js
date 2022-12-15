/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/index.html'
    // './layouts/**/*.html'
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff',
    },
    extend: {
      screens: {
        '2xl': '1800px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
