/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
       
        'display': ['Rubik']
          
      },
      colors: {
        'primcol': '#0D0D2B',
        'seccol': '#3671E9',
        'tetcol': '#2B076E',
        'faded-white': 'rgba(255, 255, 255, 0.05)',
      },

      height: {
        '1/2-screen': '50vh',
      },
    },
      
  },
  plugins: [],
}
