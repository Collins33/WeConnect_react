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
      // this one is executed immediately the data returns from the backend
      //create array of businesses with the information you need
      const newBusiness = response.data.map(business => {
        // use map to get only the relevant data from the response 
        return{
          // we are taking business name and business contact from the response
          name: business.name,
          contact: business.contact
        }
      })

      //create a new state without mutating the original state
      // newState is now equal to the new object which is the newBusiness object
      const newState = Object.assign(this.state, {businesses: newBusiness}) // new state object
      //store the new state in the component's state
      this.setState(newState)
      // this sets the newState object as our new state
     
    })
    .catch(error => console.log(error));
  }



  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
