import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'system-ui',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      'sans-serif',
    ].join(','),
    // 16px browser default base font size
    h1: {
      fontSize: '2rem', // 32px
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.75rem', // 28px
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '1rem', // 16px
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '0.75rem', // 12px
      fontWeight: 'bold',
    },
    button: {
      // fontSize: '0.875rem', // 14px
      fontSize: '1rem', // 16px
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#07C',
    },
    secondary: {
      main: '#A4C',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // '& h1': {
          //   color: 'black',
          // },
          fontSize: '0.875rem', // 14px
          lineHeight: 1.4286,
        },
      },
    },
  },
});

export default theme;
