import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
import BusinessList from './business_list'

class Business extends Component {
  // set the default state object
  state = {
    businesses: []
  }

  // add the componentDidMount lifecylce method
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
       <div className = "row">
       <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">WeConnect</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/businesses">Businesses</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/signup">Sign up</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/search">Search for business</a></li>
                </ul>
                </div>
            </nav>
       <BusinessList businesses={this.state.businesses}/>
       </div>

    );
  }
}

export default Business;
