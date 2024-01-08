module.exports = {
  mode: 'jit',

  // to make the css file smaller
  purge: ['./src/**/*.{js,jsx}', './public/index.html'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customPurple: '#7e22ce',
        customGreen: {
          light: '#9EEBCF',
          DEFAULT: '#2DCCA7',
          dark: '#1A4731',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
