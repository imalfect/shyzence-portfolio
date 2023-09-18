import { createTheme } from '@mui/material/styles';

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
});
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            appbar: '#1e1f22',
        },
        primary: {
            main: '#f2f2f2',
            borders: '#b1b1b1',
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
});
export default [darkTheme, lightTheme]
