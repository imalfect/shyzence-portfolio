import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import Button from "@mui/material/Button";
import ShyzenceAvatar from '../assets/avatar.png';
import BehindGlow from "./BehindGlow.jsx";

export default function Hero() {
    return (
        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{mt: 4}}>
            <Grid item xs={7}>
                <Typography variant="h2" component="h2">
                    Hello, I'm <span style={{color: "secondary.main"}}>Shyzence</span>,
                </Typography>
                <Typography variant="h2" component="h2">
                    A Graphic Designer
                </Typography>
                <Typography variant="h2" component="h2" >
                    Based in Canada.
                </Typography>

                <Typography variant="h5" component="h5" sx={{mt: 2, pr: 10}}>
                    Specializing but not limited to the Cryptocurrency space, I help projects and individuals with Logos, Avatars, NFT’s, and anything else they may need.
                </Typography>
                <Button variant="contained" sx={{mt: 4, fontWeight: 700}}>
                    <MailRoundedIcon/>
                    <a href={'mailto:shyzence@gmail.com'} style={{textDecoration: 'none', color: 'inherit', marginLeft: 10, textTransform: 'lowercase'}}>
                        shyzence@gmail.com
                    </a>
                </Button>
            </Grid>
            <Grid item sx={{mb: 'auto'}}>
                <BehindGlow size={100}>
                    <Avatar alt="Shyzence" src={ShyzenceAvatar} sx={{
                        width: 300,
                        height: 300,
                    }}/>
                </BehindGlow>
            </Grid>

        </Grid>
    )
}
