import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';



const InfoPaperChart = (props) => {


    return (
        <ResponsiveContainer>
            <LineChart
                data={props.data.reverse()}
                margin={{
                    top: 5, right: 2, left: 0, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey={props.x} style={{
                    fontSize: '0.6rem',
                }}/>
                <YAxis style={{
                    fontSize: '0.6rem',
                }} />
                <Tooltip />
                <Legend />
                <Line name={props.lineOneName} type="monotone" dataKey={props.lineOne} stroke="#DE3700" />
                <Line name={props.lineTwoName} type="monotone" dataKey={props.lineTwo} stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>

    );

}

export default InfoPaperChart;