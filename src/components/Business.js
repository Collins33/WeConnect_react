import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
import BusinessList from './BusinessList';
import Navbar from './navbar'

class Business extends Component {
  // set the default state object
  state = {
    businesses: [],
    component: false
  }
  // add the componentDidMount lifecylce method
  componentDidMount(){
    const auth_token = localStorage.getItem("auth_token")
    this.setState({component:true})
    axios.get("https://we-connect-muru.herokuapp.com/api/v2/businesses")
    .then(response =>{
      // this one is executed immediately the data returns from the backend
      //create array of businesses with the information you need
      const newBusiness = response.data.map(business => {
        // use map to get only the relevant data from the response 
        return{
          // we are taking business name and business contact from the response
          name: business.name,
          contact: business.contact,
          location : business.location,
          id : business.id
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
       <div className = "row">
       <Navbar />
       <BusinessList businesses={this.state.businesses}/>
       </div>

    );
  }
}

export default Business;
