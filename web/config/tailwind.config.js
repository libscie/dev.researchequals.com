/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // This prevents being overly verbose using Tailwind
    // (For now)
    preflight: false,
  },
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': 'Iowan Old Style, Palatino Linotype, URW Palladio L, P052',
        'sans': 'Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif',
      }
    },
  },
  plugins: [],
}
