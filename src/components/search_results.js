import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class SearchResults extends Component {
  state = {
    businesses:[],
    search_business:[]
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

        </div>
        </div>

    );
  }
}

export default SearchResults;
