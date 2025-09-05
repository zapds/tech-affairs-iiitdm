import { createTheme } from '@mui/material/styles';

const bookmanFont = '"Bookman Old Style", "serif"';
const primaryColor = '#3275AA';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: 'rgba(0,0,0,0)',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#546e7a',
    },
  },
  typography: {
    fontFamily: bookmanFont,
    h1: {
      fontWeight: 700,
      fontFamily: bookmanFont,
      color: primaryColor, // Add this line
    },
    h2: {
      fontWeight: 600,
      fontFamily: bookmanFont,
      color: primaryColor, // Add this line
    },
    h3: {
      fontWeight: 600,
      fontFamily: bookmanFont,
      color: primaryColor, // Add this line
    },
    body1: {
      fontFamily: bookmanFont,
    },
    body2: {
      fontFamily: bookmanFont,
    },
    subtitle1: {
      fontFamily: bookmanFont,
    },
    subtitle2: {
      fontFamily: bookmanFont,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: bookmanFont,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          fontFamily: bookmanFont,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primaryColor,
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#ce93d8',
      light: '#f3e5f5',
      dark: '#ab47bc',
    },
    background: {
      default: 'rgba(0,0,0,0)',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: bookmanFont,
    h1: {
      fontWeight: 700,
      fontFamily: bookmanFont,
      color: primaryColor, // Add this line
    },
    h2: {
      fontWeight: 600,
      fontFamily: bookmanFont,
      color: primaryColor, // Add this line
    },
    h3: {
      fontWeight: 600,
      fontFamily: bookmanFont,
      color: primaryColor, // Add this line
    },
     body1: {
      fontFamily: bookmanFont,
    },
    body2: {
      fontFamily: bookmanFont,
    },
    subtitle1: {
      fontFamily: bookmanFont,
    },
    subtitle2: {
      fontFamily: bookmanFont,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: bookmanFont,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
           fontFamily: bookmanFont,
        },
      },
    },
  },
});