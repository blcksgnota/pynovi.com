module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter', 'sans-serif'], 
        red:['"Red hat Display"', 'sans-serif'], 

      },
      colors: {
        'pynovi-blue': '#4a00e0',
        'oxford-blue': '#010038',
        'cultured': '#F7F7F7',
      }
    },
  },
  plugins: [],
}