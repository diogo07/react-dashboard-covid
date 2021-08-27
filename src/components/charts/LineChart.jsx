import { LineChart, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';

export default class CustomLineChart extends PureComponent {

  constructor(props) {
    super(props);
  }

  renderLine(headers) {
    return headers.map((header) => {
      return <Line name={header.title} type="monotone" dataKey={header.key} stroke={header.color} strokeWidth={2} dot={{ r: 0 }} />
    })
  }


  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={600} height={300} data={this.props.data} margin={{ top: 0, right: 15, bottom: 0, left: 15 }}>
          {this.props.showLegend && <Legend verticalAlign="top" height={36} iconType="rect" />}
          {this.renderLine(this.props.headers)}

          <XAxis dataKey="name" />
          <YAxis type="number" domain={['auto', 'auto']} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
