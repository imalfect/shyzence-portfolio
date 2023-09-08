import React from 'react';
import Grid from '@mui/material/Grid';
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {emitter} from "../App.jsx";
import ReactMarkdown from "react-markdown";
import '../index.css';

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
                <Grid item
                      sx={{
                          borderStyle: 'solid',
                          borderWidth: 4,
                          borderColor: 'primary.borders',
                          p: 2,
                          borderRadius: 3.5,
                          height: props.boxHeight,
                          width: props.boxWidth,
                          textAlign: 'center'}}>
                    <div style={{ maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            style={{ width: '100%'}}
                            loading="lazy"
                        />
                        <ImageListItemBar
                        title={item.title}
                        position="below"
                        sx={{textAlign: 'left'}}
                    />
                    </div>
                </Grid>
            ))}
            <Grid item
                  sx={{height: '100%'}}>
                <Box sx={{
                    borderStyle: 'solid',
                    borderWidth: 4,
                    borderColor: 'primary.borders',
                    p: 2,
                    borderRadius: 3.5,
                    height: props.boxHeight,
                    width: props.boxWidth,
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="body1" component="p" gutterBottom>
                        <ReactMarkdown className={"reactMarkDown"} linkTarget={"_blank"}>{props.description}</ReactMarkdown>
                    </Typography>
                    {props.images.length === 5 && props.type !== 'full' || props.type === 'full' ?
                        <Button variant="contained" sx={{mt: 2, mr: 2, textTransform: 'revert'}} onClick={() => toggleShowAll()}>
                            {props.type === 'full' ? 'Show less' : 'Show more'}
                        </Button>
                        :
                        null
                    }
                </Box>
            </Grid>
        </Grid>
    );
}
