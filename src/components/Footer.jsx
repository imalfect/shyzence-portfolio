import React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
export default function Footer() {
    return (
        <Box sx={{flexGrow: 1, backgroundColor: '#323336', boxShadow: 50, textAlign: 'center', mt: 5, pt: 1, pb: 1}}>
            <Container>
                    <Typography variant="p">
                        Copyright ©2023. Made with 🤍 by &nbsp;
                        <a href={"https://github.com/imalfect"} style={{textDecoration: 'none', color: '#cd3c6d'}}>
                            iMalFect
                        </a>
                    </Typography>
            </Container>
        </Box>
    )
}
