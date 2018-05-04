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
      zipcode: '8023'
    }
  }
  // componentDidMount() {
  //   fetch('api.openweathermap.org/data/2.5/weather?zip=80223, us')
  //      .then((response) => response.json())
  //       .then(response => {
  //         console.log(response[0])
  //       })
  //     .catch((error) =>{
  //     console.error(error)
  //   })
  // }
  onInputChange = (event) => {
    console.log(this.state.zipcode)
    console.log(event.target.value)
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({zipcode: this.state.input});
  }
  render() {
    const {zipcode} = this.state;
    return (<section>
      <div className="flex flex-column items-center">
        <Navbar/>
        <InputForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
      <Map zipcode = {zipcode}/>
      <WeatherChart/>

    </section>);
  }
}

export default App;
