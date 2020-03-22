import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from "./Menu";
import {connect} from 'react-redux';
import * as constants from '../../redux/constants/CriticalParams';
import JournalErrors from './JournalErrors';
import ParametrError from "./ParametrError";
import axios from "axios";
import {URL} from "../../redux/axios/config";
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
}));

const ErrorTab = (props) => {
    const classes = useStyles();
    const [criticalsData, setCriticalsData] = useState({
        "HUMIDITY": {
            "max": 100,
            "min": 0
        },
        "LEVELCO2": {
            "max": 1000,
            "min": 400
        },
        "LEVELPH": {
            "max": 14,
            "min": -1
        },
        "MASS": {
            "max": 100,
            "min": 20
        },
        "PRESSURE": {
            "max": 300000,
            "min": 0
        },
        "TEMPHOME": {
            "max": 100,
            "min": 0
        },
        "TEMPWORK": {
            "max": 30,
            "min": 0
        },
        "WATER": {
            "max": 100,
            "min": 20
        }
    });
    const getErrorsFetch = async () =>{
        const res = await axios.get(URL+"/criticals");
        const json = await res.data;
        console.log(json);
        setCriticalsData(json);
        let minAndMax = {};
        switch(props.MenuItem){
            case constants.SELECT_PRESSURE: minAndMax=json.PRESSURE;break;
            case constants.SELECT_HUMIDITY: minAndMax=json.HUMIDITY;break;
            case constants.SELECT_TEMP_HOME: minAndMax=json.TEMPHOME;break;
            case constants.SELECT_TEMP_WORK: minAndMax=json.TEMPWORK;break;
            case constants.SELECT_MASS: minAndMax=json.MASS;break;
            case constants.SELECT_WATER: minAndMax=json.WATER;break;
            case constants.SELECT_CO2: minAndMax=json.LEVELCO2;break;
            case constants.SELECT_LEVEL: minAndMax=json.LEVELPH;break;
        }
        //setCriticalsData(minAndMax);
    };
    useEffect(()=>{
        getErrorsFetch();
    }, [])
    return (
        <div className={classes.root}>
            <Menu/>
            {
                props.MenuItem === constants.SELECT_JOURNAL
                ? <JournalErrors />
                : <ParametrError criticalsData={criticalsData}/>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        MenuItem:state.CriticalParams.itemSelected,
    };
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorTab);