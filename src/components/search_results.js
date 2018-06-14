import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

class SearchResults extends Component {
  state = {
    businesses:[],
    search_business:[]
  }
  createBusiness = (item) =>{
    return <div className="col-xs-6 col-md-6 col-lg-6 panel">
    
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
    .catch(error => console.log(error));
    
  }

  render() {
    //get search business from the state
    const businesses = this.state.search_business
    const listItems=businesses.map(this.createBusiness)

    return (
        <div className = "row">
        <h1 className="text-center">SEARCH FOR A BUSINESS</h1>
        <div className="col-xs-6 col-md-6 col-lg-6">
                <form onSubmit={this.searchBusiness}>
                    <div className="form-group">
                       <input className="form-control" placeholder= "Search for a business" type="text" name="search"/>
                       <a href="/search"><button className="btn btn-success">Searh for the business</button></a>
                    </div>
                </form>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6">
        {listItems}
        </div>
        </div>

    );
  }
}

export default SearchResults;
