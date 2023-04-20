import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Data } from '../Data.jsx';

function LineGraph() {
    // const [Data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('')
    //         .then(res => {
    //             setData(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }, []);

    return (
        <>
            <LineChart width={600} height={300} data={Data} style={{marginTop:'50px'}}>
                <XAxis dataKey="week" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="null" vertical={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="guests" stroke="#8884d8" />
                <Line type="monotone" dataKey="users" stroke="#82ca9d" />
            </LineChart>

            
        </>
    )
}

export default LineGraph