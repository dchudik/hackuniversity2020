import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    root: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0 0 5%'
    },
    data:{
        padding: '10px',
        margin: '0 10px 0 10px'
    }
}));

export default function Variants(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={"h5"} component={"h2"}>{props.name}</Typography>
            <Paper variant="outlined" square className={classes.data}>
                <Typography variant={"h5"} component={"h2"}>{props.data}</Typography>
            </Paper>
            <Typography variant={"h6"} component={"h2"}>{props.mesure}</Typography>
        </div>
    );
}