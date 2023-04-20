import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Basic trees', value: 400 },
  { name: 'custom short pants', value: 300 },
  { name: 'Super Hoodies', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieGraph = () => {
  return (
    <PieChart width={400} height={400} style={{
      marginTop: '-80px',
      
    }}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default PieGraph;
