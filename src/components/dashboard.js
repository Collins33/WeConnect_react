import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

class Dashboard extends Component {
  state = {
    businesses: []
  }
  // add the componentDidMount lifecylce method
  componentDidMount(){
    const auth_token = localStorage.getItem("auth_token")
    const config = {
      // config with the token
      headers: {'Authorization': "bearer " + auth_token}
    }
    axios.get("https://we-connect-muru.herokuapp.com/api/v2/dashboard",config)
    .then(response =>{
      // this one is executed immediately the data returns from the backend
      //create array of businesses with the information you need
      const newBusiness = response.data.map(business => {
        // use map to get only the relevant data from the response 
        return{
          // we are taking business name and business contact from the response
          name: business.name,
          contact: business.contact,
          location : business.location
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
  createBusiness = (item) =>{
    //map each item into a column
    //return each column
    return <div className="col-xs-12 col-md-12 col-lg-12 well business">
      <h1 className="title">{item.name}</h1>
      <h3>{item.contact}</h3>
      <h3>{item.location}</h3>
      <button className="btn btn-info">Read more ...</button>
      </div>
}





  render() {
    const businesses = this.state.businesses;
    const listItems=businesses.map(this.createBusiness)

    return (
        <div className="row dashboardrow">
          <div className="col-xs-3 col-md-3 col-lg-3 panel dashboardcol well">
            <div className="row">
             <h1 className="text-center">MyProfile</h1>
            </div>
            <div className="row" id="home-row">
              <a href="/"><h1 className="text-center">Home</h1></a>
            </div>
          </div>
          <div className="col-xs-9 col-md-9 col-lg-9">
           <div className="row">
           <a href="/addBusiness"><button className="btn btn-success addBusinessButton">+ ADD BUSINESS</button></a>
           </div>
           <div className="row">
            <h1 id="myBusiness">My businesses</h1>
            {listItems}
           </div>
          </div>
         
        </div>

    );
  }
}

export default Dashboard;
