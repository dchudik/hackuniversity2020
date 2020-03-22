import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import SelectParam from './SelectPram';
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

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
        <div>
          <SelectParam />
      <LineChart
        width={500}
        height={300}
        data={data}
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
    );
  }
}
