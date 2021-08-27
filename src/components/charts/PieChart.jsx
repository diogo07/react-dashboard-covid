import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';


export default class CustomPieChart extends PureComponent {

    constructor(props){
        super(props);
    }


    renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    render(){
        return (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart >
                    <Pie
                        data={this.props.data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={this.renderCustomizedLabel}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {this.props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={this.props.headers[index].color} />
                        ))}
                    </Pie>
                    <Tooltip/>
                    </PieChart>
            </ResponsiveContainer>
          );
    }
}