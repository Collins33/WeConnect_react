import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './navbar'
import Intro from './Intro'
import Search from './search_business'
import Footer from './Footer'
import axios from "axios";
import Body from './Body';

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
