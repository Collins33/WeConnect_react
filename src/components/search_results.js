import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';

class SearchResults extends Component {
  state = {
    businesses:[],
    search_business:[]
  }

  createBusiness = (item) =>{
    return <div className="col-xs-12 col-md-12 col-lg-12 panel">
    
    <h1>{item.name}</h1>
    <h4>{item.location}</h4>
    <h4>{item.description}</h4>
    <h4>{item.category}</h4>
    <h4>{item.contact}</h4>
    
    </div>
  }

  searchBusiness = async (e) =>{
    e.preventDefault()
    //get data from the form
    const search= e.target.elements.search.value;
    //make get request to return searched business from the api
    axios.get(`https://we-connect-muru.herokuapp.com/api/v2/businesses/searches?q=${search}`)
    .then(response =>{
      //create an array of businesses with the info you need
      const foundBusiness = response.data.map(c =>{
        return{
          name: c.name,
          contact: c.contact,
          category:c.category,
          location:c.location,
          description:c.description
        }
      })
      //create a new state without affecting the current state
      const newState = Object.assign({}, this.state, {search_business: foundBusiness})
      //store the new state in the component's state
      this.setState(newState)
      
    })
    .catch(error => {
      if (error.response.status === 404){
        swal("Error!!", "Business does not exist", "error");
      }
    });
    
  }

  render() {
    //get search business from the state
    const businesses = this.state.search_business
    const listItems=businesses.map(this.createBusiness)

    return (
        <div className = "row">
        <div>
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
        </div>
        <h1 className="text-center">SEARCH FOR A BUSINESS</h1>
        <div className="col-xs-12 col-md-12 col-lg-12">
                <form onSubmit={this.searchBusiness} className="text-center">
                    <div className="form-group">
                       <input className="form-control" placeholder= "Search for a business" type="text" name="search"/>
                       <a href="/search"><button className="btn btn-success">Searh for the business</button></a>
                    </div>
                </form>
        </div>
        <div className="col-xs-12 col-md-12 col-lg-12">
        {listItems}
        </div>
        </div>

    );
  }
}

export default SearchResults;
