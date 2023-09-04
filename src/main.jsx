import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline, ThemeProvider} from "@mui/material";
import themes from "./themes.js";
// Better to make a function
function Website() {
    return (
        <ThemeProvider theme={themes[0]}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Website/>,
)
