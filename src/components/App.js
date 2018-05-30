import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './navbar'
import Intro from './intro'
import Business from './business'

class App extends Component {
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
