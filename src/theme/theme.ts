import { createTheme } from '@mui/material/styles';

const fontFamily = "var(--font-bricolage), 'Roboto', system-ui, sans-serif";
const primaryColor = '#fb923c'; // vibrant orange matching Open House
const secondaryColor = '#a78bfa'; // violet accent

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
      light: '#fdba74',
      dark: '#ea580c',
    },
    secondary: {
      main: secondaryColor,
      light: '#c4b5fd',
      dark: '#7c3aed',
    },
    background: {
      default: 'rgba(0,0,0,0)',
      paper: 'rgba(255,255,255,0.82)',
    },
    text: {
      primary: '#0f172a',
      secondary: 'rgba(15,23,42,0.66)',
    },
    divider: 'rgba(15,23,42,0.14)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily,
    h1: {
      fontWeight: 800,
      fontFamily,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 800,
      fontFamily,
      letterSpacing: '-0.035em',
    },
    h3: {
      fontWeight: 750,
      fontFamily,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 720,
      fontFamily,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
      fontFamily,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 700,
      fontFamily,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontFamily,
      lineHeight: 1.75,
    },
    body2: {
      fontFamily,
      lineHeight: 1.65,
    },
    subtitle1: {
      fontFamily,
      fontWeight: 550,
    },
    subtitle2: {
      fontFamily,
      fontWeight: 550,
    },
    button: {
      fontFamily,
      fontWeight: 650,
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 650,
          fontFamily,
          padding: '10px 24px',
        },
        contained: {
          background: `linear-gradient(135deg, ${primaryColor}, #f472b6)`,
          boxShadow: '0 4px 14px -3px rgba(251,146,60,0.4)',
          '&:hover': {
            background: `linear-gradient(135deg, #ea580c, #ec4899)`,
            boxShadow: '0 6px 20px -3px rgba(251,146,60,0.5)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: 'rgba(15,23,42,0.14)',
          '&:hover': {
            borderColor: primaryColor,
            background: `${primaryColor}10`,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontFamily,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: '1px solid rgba(15,23,42,0.14)',
          boxShadow: 'none',
          transition: 'transform 0.35s cubic-bezier(.22,.61,.36,1), box-shadow 0.35s ease, border-color 0.35s ease',
          '&:hover': {
            transform: 'translateY(-6px) scale(1.01)',
            boxShadow: '0 24px 48px -12px rgba(15,23,42,0.18)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily,
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: '-0.01em',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily,
          fontWeight: 550,
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
      light: '#fdba74',
      dark: '#ea580c',
    },
    secondary: {
      main: secondaryColor,
      light: '#c4b5fd',
      dark: '#7c3aed',
    },
    background: {
      default: 'rgba(0,0,0,0)',
      paper: 'rgba(255,255,255,0.03)',
    },
    text: {
      primary: '#f1f0f5',
      secondary: 'rgba(241,240,245,0.5)',
    },
    divider: 'rgba(255,255,255,0.07)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily,
    h1: {
      fontWeight: 800,
      fontFamily,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 800,
      fontFamily,
      letterSpacing: '-0.035em',
    },
    h3: {
      fontWeight: 750,
      fontFamily,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 720,
      fontFamily,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
      fontFamily,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 700,
      fontFamily,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontFamily,
      lineHeight: 1.75,
    },
    body2: {
      fontFamily,
      lineHeight: 1.65,
    },
    subtitle1: {
      fontFamily,
      fontWeight: 550,
    },
    subtitle2: {
      fontFamily,
      fontWeight: 550,
    },
    button: {
      fontFamily,
      fontWeight: 650,
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 650,
          fontFamily,
          padding: '10px 24px',
        },
        contained: {
          background: `linear-gradient(135deg, ${primaryColor}, #f472b6)`,
          boxShadow: '0 4px 14px -3px rgba(251,146,60,0.4)',
          '&:hover': {
            background: `linear-gradient(135deg, #ea580c, #ec4899)`,
            boxShadow: '0 6px 20px -3px rgba(251,146,60,0.5)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.07)',
          color: 'rgba(241,240,245,0.5)',
          '&:hover': {
            borderColor: primaryColor,
            background: `${primaryColor}10`,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontFamily,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: 'none',
          background: 'rgba(255,255,255,0.03)',
          transition: 'transform 0.35s cubic-bezier(.22,.61,.36,1), box-shadow 0.35s ease, border-color 0.35s ease',
          '&:hover': {
            transform: 'translateY(-6px) scale(1.01)',
            boxShadow: '0 24px 48px -12px rgba(0,0,0,0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily,
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: '-0.01em',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily,
          fontWeight: 550,
        },
      },
    },
  },
});