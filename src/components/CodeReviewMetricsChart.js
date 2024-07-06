import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Completed', value: 60 },
  { name: 'Pending', value: 30 },
  { name: 'In Review', value: 10 },
];

const CodeReviewMetricsChart = () => {
  return (
    <div>
      <h2>Code Review Metrics</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CodeReviewMetricsChart;

