/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      colors: {
        ink: {
          950: '#050711',
          900: '#070A16',
          800: '#0B1024'
        }
      }
    },
  },
  plugins: [],
}
