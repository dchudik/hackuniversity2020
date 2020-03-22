import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import MinMaxAvgChart from './MinMaxAvgChart';
import LineChart from './LineChart';

const useStyles = makeStyles(theme => ({
    root: {
        
    },
    charts:{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-around'
    }
}));

export default function Variants() {
    const classes = useStyles();
    useEffect(() => {
            fetch(URL+"/period?paramName=HUMIDITY&dateStart=2020-03-20&dateEnd=2020-03-30&timeStart=00:00:00&timeEnd=00:00:00")
            .then(resp => resp.json())
            .then(result => console.log(result))
            .catch(error=>console.log(error))
    }, []);
    return (
        <div className={classes.root}>
            <Typography variant={"h4"} component={"h2"}>Графики:</Typography>
            <span className={classes.charts}>
                <MinMaxAvgChart />
                <LineChart />
            </span>
        </div>
    );
}