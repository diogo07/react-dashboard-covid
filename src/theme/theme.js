import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography:{
    // fontFamily: "'Poppins', sans-serif"
  },
  palette: {
    primary: {
      main: '#2f4979',
      light: '#61dafb',
      dark: '#cecece',
    },
    secondary: {
        main: '#B4656F',
        light: '#849483',
        dark: '#cecece',
    },
    error: {
      main: "#e04747",
    },
    background: {
      default: "#fff !important"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960
    },
  },
  overrides: {
    MuiPaper: {
      rounded:{
        border: '0.2px solid #e6e2e2'
      }
    },
  },
});
export default theme;