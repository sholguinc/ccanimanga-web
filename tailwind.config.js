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
        'myFont': ['Quicksand', 'sans-serif']
      },
    },

    container: {
      center: true,
      
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
