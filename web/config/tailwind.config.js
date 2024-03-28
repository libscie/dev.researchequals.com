/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // This prevents being overly verbose using Tailwind
    // (For now)
    preflight: false,
  },
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
