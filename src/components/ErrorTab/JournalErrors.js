import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {

    },
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} >
                Journal Component
            </Paper>
        </div>
    );
}