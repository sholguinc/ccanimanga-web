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
        showText: 'showText 0.6s cubic-bezier(0.5, 1, 0.89, 1)',
        showBg: 'showBg 0.6s cubic-bezier(0.5, 1, 0.89, 1)',
        hideMenu: 'hideMenu 0.3s cubic-bezier(0.5, 1, 0.89, 1)',
      },

      keyframes: {
        toBounce: {
          '0%, 50%, 100%': { transform: 'translateY(0)' },
          '25%, 75%': { transform: 'translateY(-10%)' },
        },

        showText: {
          '0%': { transform: 'translateX(20%)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '100' },
        },

        showBg: {
          '0%': { opacity: '0'},
          '100%': { opacity: '100' },
        },

        hideMenu: {
          '0%': { opacity: '100'},
          '100%': { opacity: '0' },
        },
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
