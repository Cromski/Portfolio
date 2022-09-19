/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'realsm': '1020px'
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out 1'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(0deg)'
          },
          '33%': {
            transform: 'rotate(-10deg)'
          },
          '66%': {
            transform: 'rotate(10deg)'
          },
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
