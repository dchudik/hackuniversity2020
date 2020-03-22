import React, { PureComponent, useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import SelectParam from './SelectPram';
import {URL} from "../../redux/axios/config";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
const data = [
  {
    time: '1AM', data: 4000
  },
  {
    time: '2AM', data: 3000
  },
  {
    time: '5AM', data: 2000
  },
  {
    time: '8AM', data: 2780
  },
  {
    time: '11AM', data: 1890
  },
  {
    time: '4PM', data: 2390
  },
  {
    time: '10PM', data: 3490
  },
];
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    margin: '8px'
  },
}));
export default function LineChartComponent(props) {
  const classes = useStyles();
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  const [dataParam, setDataParam] = useState("PRESSURE");
  const [dataForChart, setDataForChart] = useState([])
  const setData = (event) => {
    setDataParam(event.target.value);
    console.log(event.target.value);
    getDataWithFetch(event.target.value);
  };
  const getDataWithFetch = async (param) => {
    let data = [
    ];
    setDataForChart(data);
    const res = await axios.get(URL+"/hourly?param="+param+"&dateStart=today")
    const json = await res.data;
    const arrayObjects = json.data.map((data,index)=>{
      if(data !== 0)
          return {"time":index, "data":data}
    })
    data = arrayObjects;

    console.log(data);
    setDataForChart(data);
  };
  useEffect(()=>{
    getDataWithFetch(dataParam);
  },[]);
        {if(dataForChart.length>0) return(
        <div>
          <p>
            <p style={{display:'flex'}}>
            <SelectParam data={dataParam} setData={(event)=>setData(event)}/>
              <TextField
                  id="date"
                  label="Дата"
                  type="date"
                  defaultValue="2020-03-22"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
              />
            </p>График изменения параметра по часам за сегодня:</p>
      <LineChart
        width={500}
        height={300}
        data={dataForChart}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
        </div>
    ); else return <p>Загрузка....</p>;}
  }

