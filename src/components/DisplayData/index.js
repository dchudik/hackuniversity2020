import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DisplayDataComponent from "./DisplayDataComponent";
import {Typography} from "@material-ui/core";
import {WSS} from '../../redux/axios/config';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

export default function Variants() {
    const classes = useStyles();
    const [datas, setDatas] = useState("");
    useEffect(() => {
        let connection = new WebSocket(WSS);
        console.log("Connect success");
        connection.onmessage = evt => {
            setDatas(evt.data);
            console.log(evt.data);
        }
    }, []);
    const getDataByParam = (param)=>{
        if(datas !== "") {
            const json = JSON.parse(datas);
            console.log(json);
            return json[param];
        }
    }
    return (
        <div className={classes.root}>
            <Typography variant={"h4"} component={"h2"}>Основные данные:</Typography>
            <DisplayDataComponent name="Давление" mesure={"Па"} data={getDataByParam("PRESSURE")}/>
            <DisplayDataComponent name="Влажность" mesure={"%"} data={getDataByParam("HUMIDITY")}/>
            <DisplayDataComponent name="Температура помещения" mesure={"℃"} data={getDataByParam("TEMPHOME")}/>
            <DisplayDataComponent name="Температура рабочей зоны" mesure={"℃"} data={getDataByParam("TEMPWORK")}/>
            <DisplayDataComponent name="Уровень pH" mesure={"Еденицы"} data={getDataByParam("LEVELPH")}/>
            <DisplayDataComponent name="Масса" mesure={"Кг"} data={getDataByParam("MASS")}/>
            <DisplayDataComponent name="Расход жидкости" mesure={"Литры"} data={getDataByParam("WATER")}/>
            <DisplayDataComponent name="Уровень CO2" mesure={"PPM"} data={getDataByParam("LEVELCO2")}/>
        </div>
    );
}