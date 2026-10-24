/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF7F8',
          100: '#FDEEF1',
          200: '#F8DDE3', // User primary
          300: '#F3C4CF',
          400: '#E79FB0',
          500: '#D7778F',
          600: '#BF5570',
          700: '#A13F56',
          800: '#843749',
          900: '#6F313F',
        },
        cream: {
          50: '#FFFCF7',
          100: '#FFF8F0', // User secondary
          200: '#FDF1DF',
          300: '#F9E4C5',
          400: '#F2CCA0',
        },
        chocolate: {
          50: '#F7F3F1',
          100: '#EFE8E5',
          200: '#DECFC9',
          300: '#C5ACA2',
          400: '#A98779',
          500: '#8C6758',
          600: '#735042',
          700: '#59382B', // User accent
          800: '#462C22',
          900: '#34231E', // User text
        },
        darkbrown: '#34231E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(89, 56, 43, 0.08)',
        'soft-lg': '0 20px 40px -10px rgba(89, 56, 43, 0.12)',
        'glow': '0 0 25px rgba(248, 221, 227, 0.7)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
