import React, {Component} from 'react';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
      name: ''
    }
  }

  componentWillReceiveProps(nextProps) {
     fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${nextProps.zipcode},us&APPID=5ce5187ddbef19cc1c72ce490a99d786`)
     .then(res => res.json())
     .then(
      (result) => {
        console.log(result)
        this.setState({
          weather: result.main.temp,
          name: result.name

        });
      }
    )
    .catch(function(error) {
      console.log(error);
    })

  }



  render() {
    return (
      <div className='center ma flex flex-column'>
      <div className='mt2'>
        <h1>{this.state.name}</h1>
        <h2> this is from Map.js {this.props.zipcode} {this.state.weather}</h2>
      </div>
    </div>
    )
  }

}

export default Map;
