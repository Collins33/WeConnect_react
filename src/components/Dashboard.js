import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory} from 'react-router';


class Dashboard extends Component {
  state = {
    businesses: [],
    loading: true
  }

  // add the componentDidMount lifecylce method
  // gets single business when component is mounted
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
          description: business.description,
          id: business.id,
          loading: false
        }
      })
      //create a new state without mutating the original state
      // newState is now equal to the new object which is the newBusiness object
      const newState = Object.assign(this.state, {businesses: newBusiness}) // new state object
      //store the new state in the component's state
      this.setState(newState)
      this.setState({ loading: false })
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

  // function to delete single business
  deleteBusiness = (business_id)=>{
    console.log(business_id)
    const auth_token = localStorage.getItem("auth_token")
    const config = {
      // config with the token
      headers: {'Authorization': "bearer " + auth_token}
    }
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover business!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Business successfully deleted", {
          icon: "success",
        });
        axios.delete(`https://we-connect-muru.herokuapp.com/api/v2/businesses/${business_id}`,config)
        .then(response =>{
          console.log(response)
          this.componentDidMount()
        })
        .catch(error =>{
          console.log(error)
        })
      } else {
        swal("Final deletion was stopped");
      }
    });
  }

  // function to update business details
  updateBusiness = (business_id,e)=>{
    console.log(business_id)
    const business_update_route = `/business/${business_id}/updateBusiness`
    browserHistory.push(business_update_route)  
  }

  // function to map out business details
  createBusiness = (item) =>{
    //map each item into a column
    //return each column
    return <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 well myBusinessRow">
      <h1 className="title text-center">{item.name}</h1>
      <h1 className="text-center well" id="businessCategory">{item.category}</h1>
      <p className="text-center">{item.description}</p>
      <h3>{item.contact}</h3>
      <h3>{item.location}</h3>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6">
      <button className="btn btn-danger manipulatebusinessbutton" onClick={(e) => this.deleteBusiness(item.id, e)}>Delete business</button>
      </div>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6">
      <button className="btn btn-info form-button" type="submit" onClick={(e) => this.updateBusiness(item.id, e)}>UPDATE BUSINESS</button>
      </div>
      </div>
      
}


  render() {
    const businesses = this.state.businesses;
    const listItems=businesses.map(this.createBusiness)
    if (this.state.loading){
      return(
        <div className="dashboardrow container-fluid">
          <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3 panel dashboardcol well">
            <div className="row">
              <h1 className="text-center title">WeConnect</h1>
            </div>
            <div className="row">
            <a href="/"><h2>HOME</h2></a>
            </div>
            <div className="row" id="home-row">
              <h2>MY PROFILE</h2>
            </div>
          </div>
          <div className="col-sm-9 col-xs-9 col-md-9 col-lg-9">
           <div className="row">
           <a href="/addBusiness"><button className="btn btn-success addBusinessButton">+ ADD BUSINESS</button></a>
           </div>
           <div className="row">
            <h1 id="myBusiness">MY BUSINESSES</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="loaderImage"/>
           </div>
          </div>     
        </div>

      )
    }

    else{
    return (
        <div className="row dashboardrow">
           <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3 panel dashboardcol well">
            <div className="row">
              <h1 className="text-center title">WeConnect</h1>
            </div>
            <hr></hr>
            <div className="row">
            <a href="/"><h2>HOME</h2></a>
            </div>
            <hr></hr>
            <div className="row" id="home-row">
              <h2>MY PROFILE</h2>
            </div>
            <hr></hr>
            <div className="row" id="home-row">
            <a href="/businesses"><h1>ALL BUSINESSES</h1></a>
            </div>
            <hr></hr>
            <div className="row" id="home-row">
            <a href="/search"><h1>SEARCH BUSINESS</h1></a>
            </div>
            <hr></hr>
            <div className="row" id="home-row">
            <a href="/addBusiness"><button className="btn btn-success">+ ADD BUSINESS</button></a>
            </div>
            <hr></hr>
          </div>
          <div className="col-sm-9 col-xs-9 col-md-9 col-lg-9">
           <div className="row">
              <h1 className="text-center title">DASHBOARD</h1>
              <hr></hr>
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
}

export default Dashboard;
