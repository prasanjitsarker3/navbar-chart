import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Chart = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 70 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];
    return (
        <>
         <PieChart width={1000} height={500}>
            <Pie dataKey="value" startAngle={180} endAngle={0} data={data}
                 cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label
            ></Pie>
            <Tooltip></Tooltip>
         </PieChart>
        </>
    );
};

export default Chart;