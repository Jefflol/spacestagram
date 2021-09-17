module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        white: '2px 2px 5px 0 rgba(255, 255, 255, 0.15)',
      },
      zIndex: {
        '-10': '-10',
      }
    },
    fontFamily: {
      'display': ['Poppins']
    },
  },
  variants: {
    extend: {
      fill: ['hover'],
    },
  },
  plugins: [],
}
