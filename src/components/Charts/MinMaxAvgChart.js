import React, { PureComponent } from 'react';
import {URL} from '../../redux/axios/config';
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
const data = [
  {
    name: 'Основные показатели за день',
    max: 4000,
    min: 1200,
    avg: 2000,
  },
]

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/'
    componentDidMount = () =>{
        fetch(URL+"/period?paramName=HUMIDITY&dateStart=2020-03-20&dateEnd=2020-03-30&timeStart=00:00:00&timeEnd=00:00:00")
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error=>console.log(error))
    }
  render() {
    return (
        <div>
          <SelectParam />
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="min" fill="#8884d8" />
        <Bar dataKey="avg" fill="#82ca9d" />
        <Bar dataKey="max" fill="#82ca9d" />
      </BarChart>
        </div>
    )
  }
}
