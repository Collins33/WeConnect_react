import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './navbar'
import Intro from './Intro'
import axios from "axios";


class App extends Component {
  //set the default State object
  state = {
    businesses:[],
    search_business:[]
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;
