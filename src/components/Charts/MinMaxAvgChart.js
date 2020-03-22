import React, { PureComponent, useEffect, useState } from 'react';
import {URL} from '../../redux/axios/config';
import axios from 'axios';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import SelectParam from './SelectPram';


export default function MinMaxAvg(props) {
  const jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/'
  const [dataParam, setDataParam] = useState("PRESSURE");
  const [dataForChart, setDataForChart] = useState([])
  const setData = (event) => {
    setDataParam(event.target.value);
    console.log(event.target.value);
    getDataWithFetch(event.target.value);
  }
  const getDataWithFetch = async (param) => {
    const data = [
      {
        name: 'Основные показатели за день',
        max: 4000,
        min: 1200,
        avg: 2000,
      },
    ];
    setDataForChart([]);
    const res = await axios.get(URL+"/maindata?paramName="+param+"&dateStart=today")
    const json = await res.data;
    data[0].avg = json["avg"];
    data[0].min = json.min;
    data[0].max = json.max;
    console.log(json);
    setDataForChart(data);
  };
  useEffect(()=>{
    getDataWithFetch(dataParam);
  },[]);
        if(dataForChart.length>0)
        return (
        <div>
          <p><SelectParam  data={dataParam} setData={(event)=>setData(event)}/>Данные за сегодня:</p>
      <BarChart
        width={500}
        height={300}
        data={dataForChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="min" fill="#8884d8" />
        <Bar dataKey="avg" fill="#82ca9d" />
        <Bar dataKey="max" fill="#82ca9d" />
      </BarChart>
        </div>
    )
            else return <p>Загрузка....</p>

  }
