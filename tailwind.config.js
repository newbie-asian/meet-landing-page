module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      redMedium: 'Red Hat Display Medium',
      redBlack: 'Red Hat Display Black',
    },

    fontSize: {
      xs: ['16px', { lineHeight: '26px' }],
      s: ['18px', { lineHeight: '26px' }],
      m: ['32px', { lineHeight: '36px' }],
      l: ['40px', { lineHeight: '44px' }],
      xl: ['48px', { lineHeight: '48px' }],
      xl2: ['64px', { lineHeight: '64px' }],
    },

    colors: {
      white: '#fafafa',
      blue: '#4D96A9',
      'light-blue': '#8FE3F9',
      'hover-blue': '#71C0D4',
      purple: '#855FB1',
      'light-purple': '#D9B8FF',
      'hover-purple': '#B18BDD',
      'dark-gray': '#28283D',
      gray: '#87879D',
    },
    extend: {
      screens: {
        xs: '460px',
      },
    },
  },
  plugins: [],
};
