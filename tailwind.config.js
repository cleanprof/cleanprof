module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // enabled: true,
    content: [
      './build/*.html',
      './build/js/*.js',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'omnes' : ['Omnes Regular'],
        'univers' : ['Univers LT Std 55 Roman'],
      },
      fontSize: {
        '2vh' : '2vh',
        '3vh' : '3vh',
        '4vh' : '4vh',
        '5vh' : '5vh',
        '6vh' : '6vh',
        '7vh' : '7vh',
        '8vh' : '8vh',
        'discount': '.8rem',
        '7xl': '4.5rem',
        '8xl': '5rem',
      },
      spacing: {
        '5/100': '5%',
        '7/100': '7%',
        '1/10': '10%',
        '1/5': '20%',
        '4/5screen': '80vh', 
      },
      height: {
        'logo': '10%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
        '3/5screen': '60vh',
        '4/5screen': '80vh',
        '9/10screen': '90vh',
      },
      minHeight: {
        '3/5screen': '60vh',
        '4/5screen': '80vh',
      },
      colors: {
        'orange-bright': '#FCB01C',
        'green-grass': '#679966',
        'white-green': '#FFFEF1',
      },
      transitionProperty: {
        'width': 'width',
        'display': 'display',
      },
      transitionDuration: {        
        '2s': '3000ms',
        '3s': '3000ms',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        'fadein': 'fadein 0.5s' 
      },
      borderRadius: {
        '3rem': '3rem',
        '2rem': '2rem',
        'footer-tl': '100% 120%',
        'footer-tr': '40% 85%',
      }
    },
  },
  variants: {},
  plugins: [],
}
