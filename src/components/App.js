import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './navbar'
import Intro from './intro'
import Business from './business'
import Search from './search_business'

class App extends Component {
  getBusiness = async (e) =>{
    e.preventDefault()
    //make the api call
    const api_call= await fetch("https://we-connect-muru.herokuapp.com/api/v2/businesses")
    //turn response to json
    const json_data = await api_call.json()
    //log the data
    console.log(json_data)
  }

  searchBusiness = async (e) =>{
    e.preventDefault()
    //get data from the form
    const search= e.target.elements.search.value;
    const api_call= await fetch(`https://we-connect-muru.herokuapp.com/api/v2/businesses/searches?q=${search}`)
    const json_data = await api_call.json()
    console.log(json_data)
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Search searchBusiness={this.searchBusiness}/>
        <Business getBusiness={this.getBusiness}/>
      </div>
    );
  }
}

export default App;
