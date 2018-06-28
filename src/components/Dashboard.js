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

  deleteBusiness = (business_id)=>{
    
    console.log(business_id)
    const auth_token = localStorage.getItem("auth_token")
    const config = {
      // config with the token
      headers: {'Authorization': "bearer " + auth_token}
    }
    axios.delete(`https://we-connect-muru.herokuapp.com/api/v2/businesses/${business_id}`,config)
    .then(response =>{
      console.log(response)
      this.componentDidMount()
    })
    .catch(error =>{
      console.log(error)
    })

  }
  createBusiness = (item) =>{
    //map each item into a column
    //return each column
    return <div className="col-xs-4 col-md-4 col-lg-4 well myBusinessRow">
      <h1 className="title text-center">{item.name}</h1>
      <h1 className="text-center well" id="businessCategory">{item.category}</h1>
      <p className="text-center">{item.description}</p>
      <h3>{item.contact}</h3>
      <h3>{item.location}</h3>
      <div className="col-xs-6 col-md-6 col-lg-6">
      <button className="btn btn-primary manipulatebusinessbutton" data-toggle="modal" data-target="#firstmodal">Update business</button>
      </div>
      <div className="col-xs-6 col-md-6 col-lg-6">
      <button className="btn btn-danger manipulatebusinessbutton" onClick={(e) => this.deleteBusiness(item.id, e)}>Delete business</button>
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
            <a href="/"><h1>HOME</h1></a>
            </div>
            <div className="row" id="home-row">
              <h1>MY PROFILE</h1>
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

          {/* modal */}

          <div id="firstmodal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal"></button>
                  <h4 className="modal-title">UPDATE BUSINESS</h4>
                </div>
                <div className="modal-body">
                  <h2>FILL TO UPDATE BUSINESS</h2>
                  <form id="playerinfo">
                    <div className="form-group">
                      <label>ENTER NEW BUSINESS NAME</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label>ENTER NEW DESCRIPTION</label>
                      <input type="number" className="form-control" id="description" />
                    </div>
                    <div className="form-group">
                      <label>ENTER NEW BUSINESS LOCATION</label>
                      <input type="number" className="form-control" id="location" />
                    </div>
                    <div className="form-group">
                      <label>ENTER NEW BUSINESS CONTACT</label>
                      <input type="number" className="form-control" id="contact" />
                    </div>
                    <button className="btn" type="submit">SUBMIT</button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        

    );
  }
}

export default Dashboard;
