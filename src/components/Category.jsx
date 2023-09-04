import React from 'react';
import {emitter} from "../App.jsx";
import ProjectsList from "./ProjectsList.jsx";
import Typography from "@mui/material/Typography";

export default function Category(props) {
    const [showAll, setShowAll] = React.useState(false);
    React.useEffect(() => {
        emitter.on('showAll', (data) => {
            if (data.target === props.name) {
                setShowAll(true);
            }
        })
        emitter.on('disableShowAll', (data) => {
            if (data.target === props.name) {
                setShowAll(false);
            }
        })
    }, []);
    return (
        <>
            <Typography
                variant="h5"
                component="h5"
                sx={{textAlign: "center", mt: 2, mb: 2}}
            >
                {props.name}
            </Typography>
            {showAll === true ?
            <ProjectsList images={props.images} description={props.description} type="full" name={props.name}/>
            :
            <ProjectsList images={props.images.slice(0, 5)} description={props.description} type="short" name={props.name}/>}
        </>

    )
}
