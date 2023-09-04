import React from 'react';
import Grid from '@mui/material/Grid';
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {emitter} from "../App.jsx";



export default function ProjectsList(props) {
    const toggleShowAll = () => {
        if (props.type === 'full') {
            emitter.emit('disableShowAll', {target: props.name});
        }
        if (props.type === 'short') {
            emitter.emit('showAll', {target: props.name});
        }
    }
    return (
        <Grid container justifyContent="center" alignItems={"center"} sx={{gap: 5}}>
            {props.images.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Grid item sx={{
                    borderStyle: 'solid',
                    borderWidth: 4,
                    borderColor: '#1e1f22',
                    p: 2,
                    borderRadius: 3.5,
                    height: 300,
                    width: 300,
                    textAlign: 'center'}}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            style={{maxWidth: '90%'}}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            position="below"
                        />
                </Grid>
            ))}
            <Grid item sx={{height: '100%'}}>
                <Box sx={{
                    borderStyle: 'solid',
                    borderWidth: 4,
                    borderColor: '#1e1f22',
                    p: 2,
                    borderRadius: 3.5,
                    height: 300,
                    width: 300,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="body1" component="p" gutterBottom>
                        {props.description}
                    </Typography>
                    <Button variant="contained" sx={{mt: 2, mr: 2, textTransform: 'revert'}} onClick={() => toggleShowAll()}>
                        {props.type === 'full' ? 'Show less' : 'Show more'}
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
