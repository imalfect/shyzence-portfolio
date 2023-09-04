import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {EmailRounded} from "@mui/icons-material";
import DiscordIcon from "./icons/DiscordIcon.jsx";
import InstagramIcon from "./icons/InstagramIcon.jsx";
import XIcon from "./icons/XIcon.jsx";
export default function ContactOptions() {
    return (
        <Typography
            variant="h5"
            component="h5"
            sx={{ textAlign: "center", mt: 2, mb: 5}}
        >
            You can contact me via the following methods:
            <Grid container justifyContent="center">
                <Grid item>
                    <Button variant="contained" sx={{ mt: 2, mr: 2, textTransform: 'revert'}}>
                       <DiscordIcon/><b>@shyzence</b>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" sx={{ mt: 2, mr: 2, textTransform: 'revert'}}>
                        <InstagramIcon/><b>@shyzence</b>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" sx={{ mt: 2, mr: 2, textTransform: 'revert'}}>
                        <XIcon/><b>@shyzence</b>
                    </Button>
                </Grid>

            </Grid>
        </Typography>
    )
}
