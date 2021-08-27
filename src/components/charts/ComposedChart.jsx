import React, { PureComponent } from "react";
import { Bar, Line, Area, ComposedChart, Legend, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default class CustomComposedChart extends PureComponent {
   
    constructor(props){
        super(props);
    }
   
    render(){
        return <ResponsiveContainer width="100%" height={300}>
            <ComposedChart width={730} height={250} data={this.props.data} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis type="number" domain={['auto', 'auto']}  />
                <Tooltip />
                {this.props.showLegend && <Legend iconType="rect" onClick={ evt => evt.inactive = true}/>}
                <Area type="monotone" dataKey={this.props.headers[0].key} fill={this.props.headers[0].color} stroke={this.props.headers[0].color} name={this.props.headers[0].title} />
                <Bar dataKey={this.props.headers[1].key} barSize={20} fill={this.props.headers[1].color} name={this.props.headers[1].title} />
                <Line type="monotone" dataKey={this.props.headers[2].key} stroke={this.props.headers[2].color} name={this.props.headers[2].title} strokeWidth={2} dot={{r:2}} />
            </ComposedChart>
        </ResponsiveContainer> 
    }
      
}