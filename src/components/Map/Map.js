import React, {Component} from 'react';
import tachyons from 'tachyons'

class Map extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      weather: '',
      currentTemp: '',
      maxTemp: '',
      minTemp: '',
      weatherIcon: '',
      ready: false
    }
  }

  componentWillReceiveProps(props) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${props.zipcode},us&units=imperial&APPID=5ce5187ddbef19cc1c72ce490a99d786`).then(res => res.json()).then((result) => {
      var temp = result.main.temp
      var maxTemp = result.main.temp_max
      var minTemp = result.main.temp_min
      this.setState(
        {
          name: result.name,
          weather: result.weather[0].main,
          currentTemp: temp,
          maxTemp : maxTemp,
          minTemp: minTemp,
          weatherIcon: result.weather[0].icon,
          ready: true
        }
      );
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    const isReady = this.state.ready
      if(this.state.ready === true) {
        return (
            <div className="overflow-auto">
              <table className="f6 w-80 mw8 center" cellSpacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-white">City</th>
                    <th className="fw6 tl pa3 bg-white">Weather</th>
                    <th className="fw6 tl pa3 bg-white">Current Temp</th>
                    <th className="fw6 tl pa3 bg-white">Max Temp</th>
                    <th className="fw6 tl pa3 bg-white">Min Temp</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  <tr className="stripe-dark">
                    <td className="pa3">{this.state.name}</td>
                    <td className="pa3 flex flex-column">
                    <img src = {`http://openweathermap.org/img/w/${this.state.weatherIcon}.png`}/>
                    {this.state.weather}</td>
                    <td className="pa3">{this.state.currentTemp}&#8457;</td>
                    <td className="pa3">{this.state.maxTemp}&#8457;</td>
                    <td className="pa3">{this.state.minTemp}&#8457;</td>
                  </tr>
                </tbody>
              </table>
            </div>

        )
      }
      else {
        return (
            <h2></h2>
        )

      }
  }
}

  export default Map;
