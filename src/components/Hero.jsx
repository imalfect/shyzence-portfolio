import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import Button from "@mui/material/Button";
import ShyzenceAvatar from '../assets/avatar.png';

export default function Hero() {
    return (
        <Grid container spacing alignItems="center" justifyContent="center" sx={{mt: 4}}>
            <Grid item lg={7}>
                <Typography variant="h2" component="h2">
                    Hello, I'm <span style={{color: "secondary.main"}}>Shyzence</span>,
                </Typography>
                <Typography variant="h4" component="h4">
                    A Graphic Designer
                </Typography>
                <Typography variant="h4" component="h4" >
                    Based in Canada.
                </Typography>
                <Typography variant="h6" component="h6" sx={{mt: 2, pr: 10}}>
                Specializing but not limited to the Cryptocurrency space, I assist projects and individuals by providing services such as logos, avatars, NFTs, and any other design needs they may have.
                </Typography>
                <Button variant="contained" sx={{mt: 4, fontWeight: 700}}>
                    <MailRoundedIcon/>
                    <a href={'mailto:shyzence@gmail.com'} style={{textDecoration: 'none', color: 'inherit', marginLeft: 10, textTransform: 'lowercase'}}>
                        shyzence@gmail.com
                    </a>
                </Button>
            </Grid>
            <Grid item sx={{mb: 'auto', mt: {xs: 3, md: 1, lg: 0}}}>
                <Avatar alt="Shyzence" src={ShyzenceAvatar} sx={{
                    width: 300,
                    height: 300,
                }}/>
            </Grid>

        </Grid>
    )
}
