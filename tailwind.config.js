/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'hero': "url('/images/Illustration.jpg')",
      },

      fontFamily: {
       
        'display': ['Rubik']
          
      },
      colors: {
        'primcol': '#0D0D2B',
        'seccol': '#3671E9',
        'tetcol': '#2B076E',
        'faded-white': 'rgba(255, 255, 255, 0.05)',
        'faded-white': 'rgba(255, 255, 255, 0.05)',
      },

      height: {
        '1/2-screen': '50vh',
      },
    },

    screens: {
      'sm': '280px',
      // => @media (min-width: 280px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
      
  },
  plugins: [],
}
