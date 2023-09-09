import { createTheme } from '@mui/material/styles';
import ManropeRegular from './fonts/manrope-v14-latin-regular.woff2';
import ManropeBold from './fonts/manrope-v14-latin-700.woff2';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#2b2d31',
            appbar: '#1e1f22',
        },
        primary: {
            main: '#3a3939',
            borders: '#1e1f22',
        }
    },
    typography: {
        h2: {
            fontSize: '3.75rem',
            // Make 2.125 for mobile
            '@media (max-width:600px)': {
                fontSize: '2.125rem',
            },
            fontWeight: 700,
        },
        fontFamily: 'Manrope',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Manrope';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Manrope'), local('Manrope-Regular'), url(${ManropeRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Manrope';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Manrope'), local('Manrope-Regular'), url(${ManropeBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
});
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            appbar: '#1e1f22',
        },
        primary: {
            main: '#f2f2f2',
            borders: '#8c8c8c',
        }
    },
    typography: {
        h2: {
            fontSize: '3.75rem',
            // Make 2.125 for mobile
            '@media (max-width:600px)': {
                fontSize: '2.125rem',
            },
            fontWeight: 700,
        },
        fontFamily: 'Manrope',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Manrope';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Manrope'), local('Manrope-Regular'), url(${ManropeRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Manrope';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Manrope'), local('Manrope-Regular'), url(${ManropeBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
});
export default [darkTheme, lightTheme]
