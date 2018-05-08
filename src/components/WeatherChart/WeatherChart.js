import React, {Component} from 'react';
import { Chart } from 'react-d3-core'
import { BarChart } from 'react-d3-basic'

var width = 405,
    height = 100,
    margins = {left: 80, right: 80, top: 50, bottom: 50},
    title = "Your Weather",
    chartSeries = [
      {field: 'temp',
        name: 'temp',
        color: '#19a974'}
      ],
    x = function(d) {
      return d.dt
    },
    xScale = 'ordinal',
    xLabel = "5 Day Forcast",
    yLabel = "Temperatures"



class WeatherChart extends Component {
  constructor() {
    super();
    this.state = {
      temperatures: [],
      loaded: false
    }
  }

  componentWillReceiveProps(props) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${props.zipcode},us&units=imperial&APPID=5ce5187ddbef19cc1c72ce490a99d786`)
       .then(res => res.json())
       .then(
        (result) => {
          var newArray;
          var indexArray;
          var pushedArray = []
          var iterator = 0
          var object2;
          result.list.forEach((num, index) => {
            newArray = result.list[index].main
            pushedArray.push(newArray)
          });
          pushedArray.forEach(function(item, index) {
            var longDate = result.list[index].dt_txt
            var date1 = new Date(longDate)
            var convertedDate = date1.getUTCDay()
            switch(convertedDate){
              case 0:
              item["dt"] = 'Sun'
              break;
              case 1:
              item["dt"] = 'Mon'
              break;
              case 2:
              item["dt"] = 'Tues'
              break;
              case 3:
              item["dt"] = 'Wed'
              break;
              case 4:
              item["dt"] = 'Thurs'
              break;
              case 5:
              item["dt"] = 'Fri'
              break;
              case 6:
              item["dt"] = 'Sat'
              break;
              default:
             item["dt"] = 'Oops?'
            }
            item["newIndex"] = iterator ++

          })
          this.setState({
            temperatures: pushedArray,
            loaded: true
          })
        }
      )
      .catch(function(error) {
        console.log(error);
      })
  }

  render() {
    if(this.state.loaded === true) {
      return (
      <tbody>
      <BarChart
        showYGrid= {false}
        margins= {margins}
        title={title}
        data={this.state.temperatures}
        width={width}
        chartSeries={chartSeries}
        x={x}
        xScale = {xScale}
        xLabel = {xLabel}
        yLabel = {yLabel}
      />
    </tbody>
  )
}
if(this.state.loaded === false) {
  return (
    <tbody>
  <BarChart
    showYGrid= {false}
    margins= {margins}
    data={this.state.temperatures}
    width={width}
    chartSeries={chartSeries}
    x={x}
  />
</tbody>
)
}


  }

}

export default WeatherChart
