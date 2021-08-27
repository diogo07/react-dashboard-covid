import React, { PureComponent } from 'react';
import { Bar, BarChart, Legend, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default class CustomBarChart extends PureComponent {


  constructor(props) {
    super(props);
  }


  renderBar(headers) {
    return headers.map((header) => {
      return <Bar dataKey={header.key} fill={header.color} name={header.title} />
    })
  }


  render() {
    return <ResponsiveContainer width="100%" height={300}>
      <BarChart width={730} height={250} data={this.props.data} margin={{ top: 10, right: 5, left: 15, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={['auto', 'auto']} />
        <Tooltip />
        {this.props.showLegend && <Legend />}
        {this.renderBar(this.props.headers)}
      </BarChart>
    </ResponsiveContainer>
  }


}