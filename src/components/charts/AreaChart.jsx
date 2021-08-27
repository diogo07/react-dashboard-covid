import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default class CustomAreaChart extends PureComponent {

  constructor(props){
    super(props);
  }

  renderLine (headers) {
    return headers.map((header) => {
      return <linearGradient id={header.id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor={header.color} stopOpacity={0.8}/>
        <stop offset="95%" stopColor={header.color} stopOpacity={0}/>
      </linearGradient>
    })
  }

  renderArea (headers) {
    return headers.map((header) => {
      return <Area type="monotone" dataKey={header.key} stroke={header.color} fillOpacity={1} fill={`url(#${header.id})`} name={header.title} />
    })
  }


  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={this.props.data}
          margin={{ top: 10, right: 15, left: 15, bottom: 0 }}>
          <defs>
            { this.renderLine(this.props.headers) }
          </defs>
          <XAxis dataKey="name" />
          <YAxis type="number" domain={['auto', 'auto']} />
          <Tooltip />
          { this.props.showLegend && <Legend verticalAlign="top" height={36} iconType="rect"/>}
          { this.renderArea(this.props.headers) }
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
