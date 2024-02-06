import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShyzenceAvatar from '../assets/avatar2.webp'
import Avatar from "@mui/material/Avatar";
import ColorModeSwitch from "./ColorModeSwitch.jsx";
export default function TopBar() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" color="appbar">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={ShyzenceAvatar} sx={{ mr: 2 }} variant="square" />
                        {/* Your Avatar */}
                        <ColorModeSwitch />
                        {/* Your ColorModeSwitch component */}
                    </div>
                    <div>
                        <Button
                            sx={{ fontWeight: 700, textTransform: 'capitalize',
                                fontSize: 17, color: '#fff'}}
                            href="#">
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ fontWeight: 700, textTransform: 'capitalize',
                                fontSize: 17, color: '#fff'}}
                            href="#work"
                        >
                            Work
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ fontWeight: 700, textTransform: 'capitalize',
                                fontSize: 17, color: '#fff'}}
                            href="#contact"
                        >
                            Contact
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
