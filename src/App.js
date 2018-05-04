import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import InputForm from './components/InputForm/InputForm'
import WeatherChart from './components/WeatherChart/WeatherChart'
import Map from './components/Map/Map'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      zipcode: '80223'
    }
  }
  // ${this.state.zipcode}
  //


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({zipcode: this.state.input});
  }
  onZipCodeSubmit = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&APPID=5ce5187ddbef19cc1c72ce490a99d786`).then((resp) => resp.json()).then(function(data) {
      console.log(data)
    }).catch(function(error) {
      console.log(error);
    })
  }

  render() {
    const {zipcode} = this.state;
    return (<section>
      <div className="flex flex-column items-center">
        <Navbar/>
        <InputForm onInputChange={this.onInputChange} onZipCodeSubmit = {this.onZipCodeSubmit()} onButtonSubmit={this.onButtonSubmit} />
      </div>
      <Map zipcode={zipcode} />
      <WeatherChart/>

    </section>);
  }
}

export default App;
