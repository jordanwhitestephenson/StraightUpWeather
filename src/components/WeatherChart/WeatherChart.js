import React, {Component} from 'react';
import { Chart } from 'react-d3-core'
import { LineChart } from 'react-d3-basic'


var chartData = [
  {
    name: "Lavon Hilll I",
    BMI: 20.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1
  },
  {
    name: "Lavon Hilll I",
    BMI: 50.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1
  },

];
var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }
class WeatherChart extends Component {
  render() {
    return (
      <tbody>
      <Chart
        title={title}
        width={width}
        height={height}
        margins= {margins}
        >
        <LineChart
          showXGrid= {false}
          showYGrid= {false}
          margins= {margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
        />
      </Chart>
      </tbody>
    )
  }

}

export default WeatherChart
