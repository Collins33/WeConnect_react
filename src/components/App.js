import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './navbar'
import Intro from './intro'
import Search from './search_business'
import Footer from './footer'
import BusinessList from './business_list'
import SearchResults from './search_results'
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
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
