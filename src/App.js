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
     this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({zipcode: this.state.input});
  }

  render() {
    const {zipcode, weather} = this.state;
    return (<section>
      <div className="flex flex-column items-center">
        <Navbar/>
        <InputForm onInputChange={this.onInputChange}  onButtonSubmit={this.onButtonSubmit} />
        <Map zipcode={zipcode}/>
      </div>

      <WeatherChart zipcode = {zipcode}/>
    </section>);
  }
}

export default App;
