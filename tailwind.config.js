// tailwind config file for typescript

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.tsx',
      './src/**/*.ts',
      './src/**/*.jsx',
      './src/**/*.js'
    ],
    options: {}
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#88aaee',
        mainAccent: '#4d80e6', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: '#dfe5f2',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#272933',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121' // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: '5px'
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000'
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px'
      },
      fontWeight: {
        base: '500',
        heading: '700'
      },
      backgroundImage: (theme) => ({
        'light-logo':
          "url('https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/logo.png?alt=media&token=c965b25f-a2a0-4f7d-824d-30b64f6a1b1a')",
        'dark-logo':
          "url('https://firebasestorage.googleapis.com/v0/b/debt-666aa.appspot.com/o/WhatsApp%20Image%202022-11-20%20at%2018.00.18.png?alt=media&token=a962ba31-c822-48e1-a5d1-b6bed037c665')"
      })
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  }
}
