import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Week 1', deployments: 10 },
  { name: 'Week 2', deployments: 15 },
  { name: 'Week 3', deployments: 20 },
  { name: 'Week 4', deployments: 25 },
  { name: 'Week 5', deployments: 30 },
];

const DeploymentFrequencyChart = () => {
  return (
    <div>
      <h2>Deployment Frequency</h2>
      <BarChart
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
        <Bar dataKey="deployments" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default DeploymentFrequencyChart;

