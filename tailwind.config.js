tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#FFD2A4',
          navbg: '#0D0D0D',
          white: '#FFF',
          itembg: '#FFF5EB',
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
