import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography, TextField, Button}  from '@material-ui/core';
import {setCriticalParam} from '../../redux/actions/CriticalParams';
import {connect} from 'react-redux';
import {URL} from '../../redux/axios/config';
import axios from "axios";
import * as constants from '../../redux/constants/CriticalParams';

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',

    },
    papper:{
        padding:'20px'
    },
    field:{
        display: 'flex',
        margin: '10px 0 0 5%',
        alignItems: 'flex-end',
    },
    label:{
        paddingRight: '10px'
    },
    button:{
        marginTop: '15px',
        marginLeft: '20%',
    }
}));

export const SimplePaper = (props) => {
    const classes = useStyles();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [criticalsData, setCriticalsData] = useState({min:0, max:100});
    const [name, setName] = useState("");
    const sendSetData = ()=>{
        console.log("click");
        setCriticalParam(props.selectItem, parseFloat(min),parseFloat(max));
    };

    useEffect(()=>{
        let minAndMax={};
        let json = props.criticalsData;
        let name="";
        switch(props.selectItem){
            case constants.SELECT_PRESSURE: minAndMax=json.PRESSURE;name="Давление";break;
            case constants.SELECT_HUMIDITY: minAndMax=json.HUMIDITY;name="Влажность";break;
            case constants.SELECT_TEMP_HOME: minAndMax=json.TEMPHOME;name="Температура помещения";break;
            case constants.SELECT_TEMP_WORK: minAndMax=json.TEMPWORK;name="Температура рабочей зоны";break;
            case constants.SELECT_MASS: minAndMax=json.MASS;name="Масса";break;
            case constants.SELECT_WATER: minAndMax=json.WATER;name="Вода";break;
            case constants.SELECT_CO2: minAndMax=json.LEVELCO2;name="Уровень CO2";break;
            case constants.SELECT_LEVEL: minAndMax=json.LEVELPH;name="Уровень pH";break;
        }
        setCriticalsData(minAndMax);
        setName(name);
    }, )
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.papper}>
                <Typography variant={"h4"} component={"span"}>Настройки критических значений для параметра: {name}</Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <span className={classes.field}>
                        <Typography variant={"subtitle1"} className={classes.label} component={"span"}>Минимальное значение: </Typography>
                        <TextField id="standard-basic"  value={criticalsData.min} onChange={(event)=>{setMin(event.target.value)}}/>
                    </span>
                    <span className={classes.field}>
                        <Typography variant={"subtitle1"} className={classes.label} component={"span"}>Максимальное значение: </Typography>
                        <TextField id="standard-basic"  value={criticalsData.max} onChange={(event)=>{setMax(event.target.value)}}/>
                    </span>
                    <Button className={classes.button} onClick={sendSetData}>Установить</Button>
                </form>
            </Paper>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        selectItem: state.CriticalParams.itemSelected,
    };
};

export default connect(mapStateToProps)(SimplePaper);