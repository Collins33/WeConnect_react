import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './navbar'
import Intro from './intro'
import Business from './business'

class App extends Component {
  getBusiness = async () =>{
    //make the api call
    const api_call= await fetch("https://we-connect-muru.herokuapp.com/api/v2/businesses")
    //turn response to json
    const json_data = await api_call.json()
    //log the data
    console.log(json_data)
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Business />
      </div>
    );
  }
}

export default App;
