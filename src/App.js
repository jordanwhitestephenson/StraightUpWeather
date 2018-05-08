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
      zipcode: '',
    }
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({zipcode: this.state.input});
  }

  render() {
    const {zipcode } = this.state;
    return (

      <div className="w-100 flex flex-column items-center avenir">
        <Navbar/>
        <InputForm className = "w-80" onInputChange={this.onInputChange}  onButtonSubmit={this.onButtonSubmit} />
        <div>
        <Map className = "w-80" zipcode = {zipcode}/>
        </div>
        <WeatherChart className = "w-100 flex flex-column items-center"zipcode = {zipcode}/>
      </div>);
  }
}

export default App;
