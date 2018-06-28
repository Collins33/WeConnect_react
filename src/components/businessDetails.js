import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import '../App.css';
import axios from 'axios';
class BusinessDetails extends Component {
  state = {
    businesses: []
  }
  componentDidMount(){
    const id = this.props.params.id
    console.log(id)
    this.getBusinessDetails(id)
  }

  // function to make call to get business details

  getBusinessDetails = (id)=>{
    axios.get(`https://we-connect-muru.herokuapp.com/api/v2/businesses/${id}`)
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
          description: business.description,
          id: business.id
        }
      })
      //create a new state without mutating the original state
      // newState is now equal to the new object which is the newBusiness object
      const newState = Object.assign(this.state, {businesses: newBusiness}) // new state object
      //store the new state in the component's state
      this.setState(newState)
      // this sets the newState object as our new state
      console.log(this.state)
    })
  }
  render() {
    return (
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <div className="row intro">
          <h1 className="text-center intro-text title">WeConnect</h1>
          <h2 className="text-center intro-text">
            A new way to connect with businesses around you
          </h2>
        </div>
      </Animated>

    );
  }
}

export default BusinessDetails;