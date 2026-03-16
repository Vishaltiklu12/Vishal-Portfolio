/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      colors: {
        ink: {
          950: '#060816',
          900: '#0a1020',
          800: '#10192f',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.18), 0 0 60px rgba(59, 130, 246, 0.12)',
      },
    },
  },
  plugins: [],
}
