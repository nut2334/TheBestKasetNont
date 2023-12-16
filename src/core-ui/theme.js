import { createTheme } from '@mui/material/styles';;

const myTheme = createTheme({
  typography: {
    fontFamily: 'Kanit'
  },
  palette: {
    primary: {
      main: '#00B25A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3081D0',
      contrastText: '#FFFFFF',
    },
  },
  components: {
    MuiBadge: {
      styleOverrides: {
        dot: {
          width: 30, // Adjust the width as needed
          height: 30, // Adjust the height as needed
          borderRadius: '50%',
        },
      },
    },
  },
});

export default myTheme;
