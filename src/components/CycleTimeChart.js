import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Week 1', cycleTime: 5 },
  { name: 'Week 2', cycleTime: 4 },
  { name: 'Week 3', cycleTime: 3 },
  { name: 'Week 4', cycleTime: 6 },
  { name: 'Week 5', cycleTime: 5 },
];

const CycleTimeChart = () => {
  return (
    <div>
      <h2>Cycle Time</h2>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cycleTime" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default CycleTimeChart;

