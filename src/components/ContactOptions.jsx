import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {EmailRounded} from "@mui/icons-material";
import DiscordIcon from "./icons/DiscordIcon.jsx";
import InstagramIcon from "./icons/InstagramIcon.jsx";
import XIcon from "./icons/XIcon.jsx";
import MailRoundedIcon from "@mui/icons-material/MailRounded.js";
export default function ContactOptions() {
    return (
            <Grid container justifyContent="center" sx={{mb: 5}}>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{ mt: 2, mr: 2, textTransform: 'revert'}}
                        href={"https://discord.com/users/423635211243487242"}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                       <DiscordIcon/><b>@shyzence</b>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{ mt: 2, mr: 2, textTransform: 'revert'}}
                        href={"https://www.instagram.com/shyzence"}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        <InstagramIcon/><b>@shyzence</b>
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{ mt: 2, mr: 2, textTransform: 'revert'}}
                        href={"https://twitter.com/shyzence"}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        <XIcon/><b>@shyzence</b>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" sx={{ mt: 2, mr: 2, textTransform: 'revert', fontWeight: 700}}>
                        <MailRoundedIcon/>
                        <a href={'mailto:shyzence@gmail.com'} style={{textDecoration: 'none', color: 'inherit', marginLeft: 10, textTransform: 'lowercase'}}>
                            shyzence@gmail.com
                        </a>
                    </Button>
                </Grid>
            </Grid>
    )
}
