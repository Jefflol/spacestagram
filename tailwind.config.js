module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
