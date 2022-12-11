/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        // Custom Colors
        'ccam-red': '#F0555A', // Coral Pink
      },

      screens: {
        'xsm': '480px', // => @media (min-width: 480px) { ... }
      },

      fontFamily: {
        'myFont': ['Quicksand', 'sans-serif'],
        'jp': ['Noto Serif JP', 'serif'],
      },

      animation: {
        scrollTop: 'toBounce 0.75s ease-in-out',
      },

      keyframes: {
        toBounce: {
          '0%, 50%, 100%': { transform: 'translateY(0)' },
          '25%, 75%': { transform: 'translateY(-10%)' },
        }
      }
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],

  corePlugins: {
    preflight: false,
    aspectRatio: false,
  }
}
