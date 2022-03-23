module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: [],
  theme: {
    extend: {
      screens: { 'sm': { 'max': '640px' } },
    },
  },
  plugins: [],
};
