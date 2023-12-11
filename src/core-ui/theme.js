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
});

export default myTheme;
