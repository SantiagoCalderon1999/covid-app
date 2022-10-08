import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: '#fff'
    },
    secondary: {
      main: '#f44336',
    },
  },
  });

export default theme;