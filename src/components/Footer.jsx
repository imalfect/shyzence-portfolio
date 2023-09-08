import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
export default function Footer() {
    return (
        <Box sx={{flexGrow: 1, backgroundColor: 'background', boxShadow: 50, textAlign: 'center', mt: 7, pt: 1, pb: 1}}>
            <Container>
                 <Typography variant="p" style={{ fontSize: '12px' }}>
    Copyright ©2023. Made with ♡ by &nbsp;
    <a href={"https://github.com/imalfect"} style={{ textDecoration: 'none', color: '#cd3c6d' }}>
        iMalFect
    </a>
            </Typography>

            </Container>
        </Box>
    )
}
