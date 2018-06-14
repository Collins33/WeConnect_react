import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './navbar'
import Intro from './intro'
import Business from './business'
import Search from './search_business'
import Footer from './footer'
import BusinessList from './business_list'
import SearchResults from './search_results'
import axios from "axios";

class App extends Component {
  //set the default State object
  state = {
    businesses:[],
    search_business:[]
  }

  //add the componentDidMount lifecylce method
  componentDidMount(){
    axios.get("https://we-connect-muru.herokuapp.com/api/v2/businesses")
    .then(response =>{
      //create array of businesses with the information you need
      const newBusiness = response.data.map(c => {
        return{
          name: c.name,
          contact: c.contact
        }
      })

      //create a new state without mutating the original state
      const newState = Object.assign({}, this.state, {businesses: newBusiness})
      //store the new state in the component's state
      this.setState(newState)
    })
    .catch(error => console.log(error));
  }

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
    //create array of search results with the information you need
    
    //create a new state
    const newState = Object.assign({}, this.state, {search_business: json_data})
    //store the new state in the component's state
    this.setState(newState)
    console.log(newState)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Search searchBusiness={this.searchBusiness}/>
        <Business getBusiness={this.getBusiness}/>
        <BusinessList businesses={this.state.businesses}/>
        <Footer />
      </div>
    );
  }
}

export default App;
