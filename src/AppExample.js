// import React, {Component} from 'react';
// import Navigation from './components/Navigation/Navigation'
// import Footer from './components/Footer/Footer'
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
// import SignIn from './components/SignIn/SignIn'
// import Register from './components/Register/Register'
// import Rank from './components/Rank/Rank'
// import FaceRecognition from './components/FaceRecognition/FaceRecognition'
// import './App.css';
// import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';
// const clarifiapp = new Clarifai.App({apiKey: 'bc7a9e494ded4ac5ba5eec5ffa250b47'});
//
// const particlesOptions = {
//   particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// }
//
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: '',
//       imageURL: '',
//       box: {},
//       route: 'signin',
//       isSignedIn: false
//     }
//   }
//   componentDidMount() {
//     fetch('http://localhost:3000')
//       .then((response) => response.json())
//         .then(response => {
//           console.log(response)
//         })
//       .catch((error) =>{
//       console.error(error)
//     })
//   }
//
//   calculateFaceLocation = (data) => {
//     console.log(data)
//     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
//     const image = document.getElementById('inputimage');
//     const width = Number(image.width);
//     const height = Number(image.height);
//     return {
//       leftCol: clarifaiFace.left_col * width,
//       topRow: clarifaiFace.top_row * height,
//       rightCol: width - (clarifaiFace.right_col * width),
//       bottomRow: height - (clarifaiFace.bottom_row * height)
//     }
//   }
//
//   displayFaceBox = (box) => {
//     this.setState({box: box});
//   }
//   onInputChange = (event) => {
//     this.setState({input: event.target.value});
//   }
//
//   onButtonSubmit = () => {
//     this.setState({imageURL: this.state.input});
//     clarifiapp.models
//       .predict(
//         Clarifai.FACE_DETECT_MODEL,
//         this.state.input)
//       .then(response => {
//         this.displayFaceBox(this.calculateFaceLocation(response))
//       })
//       .catch(err => console.log(err));
//   }
//
//   onRouteChange = (route) => {
//     if (route === 'signout') {
//       this.setState({isSignedIn: false})
//     } else if (route === 'home') {
//       this.setState({isSignedIn: true})
//     }
//     this.setState({route: route})
//   }
//   render() {
//     const {isSignedIn, imageURL, route, box} = this.state;
//     return (
//       <div className="App h-100">
//          <Particles className='particles'
//           params={particlesOptions}
//         />
//         <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
//         { route === 'home'
//           ? <div className = "pa2 ">
//               <Rank/>
//               <ImageLinkForm
//                 onInputChange={this.onInputChange}
//                 onButtonSubmit={this.onButtonSubmit}
//               />
//               <FaceRecognition box={box} imageURL={imageURL} />
//             </div>
//           : (
//              route === 'signin'
//              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
//              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
//             )
//         }
//         <Footer/>
//       </div>
//     )
//   }
// }
//
// export default App;
