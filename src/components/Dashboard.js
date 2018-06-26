import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory} from 'react-router';

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
          location : business.location,
          category: business.category,
          description: business.description
        }
      })
      //create a new state without mutating the original state
      // newState is now equal to the new object which is the newBusiness object
      const newState = Object.assign(this.state, {businesses: newBusiness}) // new state object
      //store the new state in the component's state
      this.setState(newState)
      // this sets the newState object as our new state
    })
    .catch(error => {
      // alerts if there is an error
      if (error.response.status === 409){
        swal("Error!!", "Business name already exists. Use a different name", "error");
        browserHistory.push('/login')
      }
      else if(error.response.status === 400){
          swal("Error!!", "Credentials are invalid. Ensure all fields are present,", "error");
          browserHistory.push('/login')
      }
      else if(error.response.status === 403){
          swal("Error!!", "You must be logged in to use the dashboard,", "error");
          browserHistory.push('/login')
      }
      else if(error.response.status === 500){
          swal("Error!!", "You must be logged in to use the dashboard,", "error");
          browserHistory.push('/login')
      }
    });
  }
  createBusiness = (item) =>{
    //map each item into a column
    //return each column
    return <div className="col-xs-12 col-md-12 col-lg-12 well myBusinessRow">
      <h1 className="title text-center">{item.name}</h1>
      <h1 className="text-center well">{item.category}</h1>
      <p className="text-center">{item.description}</p>
      <h3>{item.contact}</h3>
      <h3>{item.location}</h3>
      <div className="col-xs-6 col-md-6 col-lg-6">
      <button className="btn btn-primary manipulatebusinessbutton">Update business</button>
      </div>
      <div className="col-xs-6 col-md-6 col-lg-6">
      <button className="btn btn-danger manipulatebusinessbutton">Delete business</button>
      </div>
      </div>
}


  render() {
    const businesses = this.state.businesses;
    const listItems=businesses.map(this.createBusiness)

    return (
        <div className="row dashboardrow">
          <div className="col-xs-3 col-md-3 col-lg-3 panel dashboardcol well">
            <div className="row">
             <h1>MY PROFILE</h1>
            </div>
            <div className="row" id="home-row">
              <a href="/"><h1>HOME</h1></a>
            </div>
          </div>
          <div className="col-xs-9 col-md-9 col-lg-9">
           <div className="row">
           <a href="/addBusiness"><button className="btn btn-success addBusinessButton">+ ADD BUSINESS</button></a>
           </div>
           <div className="row">
            <h1 id="myBusiness">MY BUSINESSES</h1>
            {listItems}
           </div>
          </div>
         
        </div>

    );
  }
}

export default Dashboard;
