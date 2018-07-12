import React, { Component } from 'react';
import '../App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

class App extends Component {
  //set the default State object
  state = {
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
