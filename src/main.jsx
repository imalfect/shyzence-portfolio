import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline, ThemeProvider} from "@mui/material";
import themes from "./themes.js";
import {emitter} from "./App.jsx";
// Get "theme" cookie
function getCurrentTheme() {
    let colorScheme = document.cookie.split('; ').find(row => row.startsWith('theme='));
    // Get only the value of the cookie
    // If the cookie doesn't exist, set it to "dark"
    if (colorScheme === undefined) {
        document.cookie = "theme=dark";
        colorScheme = "dark";
    } else {
        colorScheme = colorScheme.split('=')[1];
    }
    return colorScheme
}
function getTheme(type) {
    console.log(type);
    if (type === 'dark') {
        return themes[0]
    } else if (type === 'light') {
        return themes[1]
    }
}
// Better to make a function
function Website() {
    const [mode, setMode] = React.useState(getCurrentTheme());
    React.useEffect(() => {
        emitter.on('themeChange', (data) => {
            setMode(data.mode);
            // Set cookie
            document.cookie = `theme=${data.mode}`;
        })
    }, []);
    return (
            <ThemeProvider theme={getTheme(mode)}>
                <CssBaseline />
                <App />
            </ThemeProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Website/>,
)
