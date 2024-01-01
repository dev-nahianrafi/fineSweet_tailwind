tailwind.config = {
    theme: {
      extend: {
        screens: {
          'xs': '400px',
          'sm': '576px',
          'md': '768px',  
          'lg': '992px',
          'xl': '1200px',
          '2xl': '1400px',
          '3xl': '1600px',
        },
        colors: {
          primary: '#FFD2A4',
          navbg: '#0D0D0D',
          white: '#FFF',
          itembg: '#FFF5EB',
          black: '#161722',
          footerbg: '#161722',
        },
        maxWidth: {
            'container': '1280px',
        },
        fontFamily: {
            roboto: "Roboto Condensed, sans-serif",
        },
        backgroundImage: {
            'banner': "url('./images/banner.jpg')",
            'background': "url('./images/Background.jpg')",
            overlay : 'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);'
          }
      }
    }
  }
