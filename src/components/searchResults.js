import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory} from 'react-router';

class SearchResults extends Component {
  state = {
    businesses:[],
    search_business:[],
    filter_business:[],
    loading : false
  }

  createBusiness = (item) =>{
    return <div className="col-xs-12 col-md-12 col-lg-12 panel">
    <h1>{item.name}</h1>
    <h4>{item.location}</h4>
    <h4>{item.description}</h4>
    <h4>{item.category}</h4>
    <h4>{item.contact}</h4>
    <button className="btn btn-info" onClick={(e) => this.showBusinessDetails(item.id, e)}>Read more ...</button>
    </div>
  }
  // function to redirect to the component displaying details about the business
  showBusinessDetails = (business_id) =>{
    console.log(business_id)
    const business_detail_route = `/business/${business_id}`
    browserHistory.push(business_detail_route)   
  }

  // called if no business is found
  noBusinessFound(){
    const foundBusiness = []
    const newState = Object.assign({}, this.state, {search_business: foundBusiness})
    this.setState(newState)
  }

  searchBusiness = async (e) =>{
    e.preventDefault()
    // set the site to start loading
    this.setState({ loading: true })
    //get data from the form
    const search= e.target.elements.search.value;
    //make get request to return searched business from the api
    axios.get(`https://we-connect-muru.herokuapp.com/api/v2/businesses/searches?q=${search}`)
    .then(response =>{
      //create an array of businesses with the info you need
      const foundBusiness = response.data.map(business =>{
        return{
          name: business.name,
          contact: business.contact,
          category:business.category,
          location:business.location,
          description:business.description,
          id: business.id
        }
      })
      //create a new state without affecting the current state
      const newState = Object.assign({}, this.state, {search_business: foundBusiness})
      //store the new state in the component's state
      this.setState(newState)
      this.setState({ loading: false })
      
    })
    .catch(error => {
      if (error.response.status === 404){
        swal("Error!!", "Business does not exist", "error");
        this.noBusinessFound()
        this.setState({ loading: false })
      }
    });
    
  }
  // function to filter the businesses
 // started by the filter button
  filterBusiness=(e)=>{
    e.preventDefault()
    // get category from the drop down
    this.setState({ loading: true })
    var dropdown = document.getElementById("sel1");
    var category_select = dropdown.options[dropdown.selectedIndex].text;
    const category = category_select
    // make get request to get business in a category
    axios.get(`https://we-connect-muru.herokuapp.com/api/v2/businesses/${category}`)
    .then(response=>{
      console.log(response)
    })
  }


  render() {
    //get search business from the state
    const businesses = this.state.search_business
    const listItems=businesses.map(this.createBusiness)

    if(this.state.loading){
      return(
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="loaderImage"/>
        </div>
        </div>
      )
    }
    else{
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
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                <form onSubmit={this.searchBusiness} className="text-center">
                    <div className="form-group">
                       <input className="form-control" placeholder= "Search for a business" type="text" name="search"/>
                       <a href="/search"><button className="btn btn-success">Searh for the business</button></a>
                    </div>
                </form>
        </div>

        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 filter-row">
        <h1>FILTER BUSINESS</h1>
        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
        <form>
        <div class="form-group">
            <label for="sel1">Select business category:</label>
              <select class="form-control" id="sel1">
                    <option>technology</option>
                    <option>agriculture</option>
                    <option>retail</option>
                    <option>fast-food</option>
                    <option>software</option>
                    <option>hardware</option>
              </select>
        </div>
        <button className="btn btn-info form-button" type="submit" onClick={this.filterBusiness}>FILTER</button>
        </form>
        </div>
        </div>
        <div className="col-xs-12 col-md-12 col-lg-12">
        {listItems}
        </div>
        </div>

    );
  }
 
  }
}

export default SearchResults;
