/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Font stacks from: https://modernfontstacks.com/
      fontFamily: {
        serif: 'Iowan Old Style, Palatino Linotype, URW Palladio L, P052',
        sans: 'Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif',
      },
    },
  },
  plugins: [],
}
