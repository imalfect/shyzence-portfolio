import React from 'react';
import {emitter} from "../App.jsx";
import IconButton from '@mui/material/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
export default function ColorModeSwitch() {
    const [mode, setMode] = React.useState(document.cookie.split('; ').find(row => row.startsWith('theme=')).split('=')[1] === 'dark' ? 'dark' : 'light')
    return (
        <IconButton
            onClick={() => {
                emitter.emit('themeChange', {
                    mode: mode === 'dark' ? 'light' : 'dark'
                })
                setMode(mode === 'dark' ? 'light' : 'dark')
            }}
            sx={{color: 'white'}}
            aria-label="Toggle color mode"
            >
            {
                mode === 'dark' ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>
            }
        </IconButton>
    )
}
