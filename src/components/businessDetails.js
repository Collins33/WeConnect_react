import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import '../App.css';
import axios from 'axios';
class BusinessDetails extends Component {
  state = {
    businesses: [],
    reviews: []
  }
  componentDidMount(){
    const id = this.props.params.id
    console.log(id)
    this.getBusinessDetails(id)
    this.getBusinessReviews(id)
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
      
    })
    .catch(error =>{
      console.log(error)
    })
  }

  // function to get all business reviews
  getBusinessReviews = (id) =>{
    axios.get(`https://we-connect-muru.herokuapp.com/api/v2/businesses/${id}/reviews`)
    .then(response =>{
      // this one is executed immediately the data returns from the backend
      //create array of businesses with the information you need
      const newReview = response.data.map(review => {
        // use map to get only the relevant data from the response 
        return{
          // we are taking business name and business contact from the response
          opinion: review.opinion,
          rating: review.rating,
        }
      })
      //create a new state without mutating the original state
      // newState is now equal to the new object which is the newBusiness object
      const newState = Object.assign(this.state, {reviews: newReview}) // new state object
      //store the new state in the component's state
      this.setState(newState)
      // this sets the newState object as our new state
      console.log(this.state.reviews)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  // function to map the single business details
  createBusiness = (item) =>{
    //map each item into a column
    //return each column
    return <div className="col-xs-12 col-md-12 col-lg-12 well">
      <h1 className="title text-center">{item.name}</h1>
      <h1 className="text-center well">{item.category}</h1>
      <p className="text-center">{item.description}</p>
      <h3>{item.contact}</h3>
      <h3>{item.location}</h3>
      </div>
}

// funtion to map single review to the ui
createReview = (item) =>{
  return <div className="col-xs-12 col-md-12 col-lg-12">
      <h1>{item.opinion}</h1>
      <h1 className="well">Rating: {item.rating}</h1>
      </div>
}

  render() {
    // get business from state and map them
    const businesses = this.state.businesses;
    const listItems=businesses.map(this.createBusiness)
    
    // get reviews from state and map them
    const reviews = this.state.reviews;
    const reviewList=reviews.map(this.createReview)

    return (
        <div className="row">
        <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand title" href="/">WeConnect</a>
                </div>
                <ul className="nav navbar-nav">
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/businesses">Businesses</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/search">Search for business</a></li>
                    <li><a href="signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
        </nav>
        {/* BUSINESS DETAILS COLUMN */}
          {listItems}
        {/* REVIEWS ROW */}

        <div className="row">
        <div className="col-xs-6 col-md-6 col-lg-6">
        <h2 className="text-center">ALL REVIEWS</h2>
        {reviewList}
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 well">
        <h2 className="text-center">ADD REVIEW</h2>
        <form className="text-center">
                <div className="form-group">
                    <input className="form-control" placeholder="enter business review" id="name-field" type="name" name="businessOpinion" />
                </div>                
                <div class="form-group">
                <label for="sel1">Select business rating:</label>
                <select class="form-control" id="sel1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
                <button className="btn btn-info form-button" type="submit">ADD REVIEW</button>
            </form>
        
        </div>
        </div>  
        </div>
    );
  }
}

export default BusinessDetails;