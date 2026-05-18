/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        lake: {
          50: '#f0f6fa',
          100: '#d9e7f0',
          200: '#a9c6d8',
          400: '#4a7d9e',
          600: '#1f4e6b',
          700: '#173b53',
          800: '#0f2a3d',
          900: '#0a1d2a'
        },
        forest: {
          400: '#5a8a5a',
          600: '#3a6b3a',
          700: '#2c5530',
          800: '#1f3d22'
        },
        cream: {
          50: '#fdfaf3',
          100: '#f8f1e1',
          200: '#efe3c6'
        },
        wood: {
          400: '#a07a4f',
          600: '#7a5731',
          700: '#5e4225'
        }
      },
      boxShadow: {
        soft: '0 4px 20px rgba(15, 42, 61, 0.08)',
        card: '0 6px 24px rgba(15, 42, 61, 0.10)'
      }
    }
  },
  plugins: []
};
