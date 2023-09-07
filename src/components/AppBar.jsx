import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShyzenceAvatar from '../assets/avatar.png'
import Avatar from "@mui/material/Avatar";
export default function TopBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: 'background.appbar'}}>
                <Toolbar>
                    <Avatar src={ShyzenceAvatar} sx={{mr: 2}}/>
                    <Typography variant="h7" component="div" sx={{ flexGrow: 1, fontWeight: 700}}>
                        Shyzence
                    </Typography>
                    <Button
                        color="inherit"
                        sx={{fontWeight: 700, textTransform: 'capitalize', fontSize: 17}}
                        href="#">
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        sx={{fontWeight: 700, textTransform: 'capitalize', fontSize: 17}}
                        href="#work">
                        Work
                    </Button>
                    <Button
                        color="inherit"
                        sx={{fontWeight: 700, textTransform: 'capitalize', fontSize: 17}}
                        href="#contact">
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
