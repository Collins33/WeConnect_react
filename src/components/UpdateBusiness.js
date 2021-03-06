import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory} from 'react-router';
import Navbar from './Navbar'

class UpdateBusiness extends Component {
  constructor() {
    super();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
  }
  state = {
     category: '',
     contact: '',
     description: '',
     location: '',
     name:'',
     loading: true
  }

  componentDidMount(){
    const id = this.props.params.id
    this.getBusinessDetails(id)
  }
  // function to make call to get business details
  getBusinessDetails = (id)=>{
    axios.get(`https://we-connect-muru.herokuapp.com/api/v2/businesses/${id}`)
    .then(response =>{
      // get business details from the request response
      const name = response.data[0].name
      const category = response.data[0].category
      const contact = response.data[0].contact
      const description = response.data[0].description
      const location = response.data[0].location

      // set state after get request with business details
      this.setState({ loading: false })
      this.setState({ name: name })
      this.setState({ contact: contact })
      this.setState({ description: description })
      this.setState({ location: location })
      this.setState({ category: category })
    })
    .catch(error =>{
      console.log(error)
    })
  }

  updateBusinessDetails=(e)=>{
    e.preventDefault()
    // get details from the update form
    const name = e.target.elements.businessName.value;
    const desc = e.target.elements.businessDescription.value;
    const contact = e.target.elements.businessContact.value;
    const location = e.target.elements.businessLocation.value;
    var dropdown = document.getElementById("sel1");
    var category_select = dropdown.options[dropdown.selectedIndex].text;
    const category = category_select
    // get business id
    const business_id = this.props.params.id
    // get auth_token
    const auth_token = localStorage.getItem("auth_token")
    // create payloads
    const config = {
      // config with the token
      headers: {'Authorization': "bearer " + auth_token}
    }
    // payload containing business information
    const payload = {
        name:name,
        description: desc,
        contact: contact,
        location: location,
        category: category
    }
    console.log(payload)
    // make the put request
    axios.put(`https://we-connect-muru.herokuapp.com/api/v2/businesses/${business_id}`,
        payload,config).then(response =>{
          swal({
            title: "Success!",
            text: "You successfully updated the business",
            icon: "success",
            button: "Explore",
          });
          browserHistory.push('/dashboard')
        }
        ).catch(error =>{
          // the response message if user tries to leave fields missing when updating
          if (error.response.status === 400){
            swal("Error!!", "Cannot update the business with empty fields", "error");
          }
          // response if user is logged out
          else if (error.response.status === 403){
            swal("Error!!", "You must be logged in to update a business", "error");
          }
        });
  }
   // functions to handle change in values of the form
   // form values are bound to the state so the state has to be changed when input value changes
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }
  handleContactChange(event) {
    this.setState({contact: event.target.value});
  }
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  // render the ui
  render() {
    if (this.state.loading){
      return(
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="loaderImage"/>
      )
    }
    else{
    return (
        <div className="row signuprow">
        <Navbar />
         {/* form to update business details */}
        <form className="updateForm well" onSubmit={this.updateBusinessDetails}>
        <h1 className="text-center">UPDATE BUSINESS</h1>
        <div className="form-group">
          <h3>Enter new name</h3>
          <input className="form-control" placeholder="enter new name"  type="name" name="businessName" value={this.state.name} onChange={this.handleNameChange}/>
        </div>
        <div className="form-group">
          <h3>Enter new description</h3>
          <input className="form-control" placeholder="enter new description" id="businessDescription" type="name" name="businessDescription" value={this.state.description} onChange={this.handleDescriptionChange}/>
        </div>
        <div className="form-group">
          <h3>Enter new contact</h3>
          <input className="form-control" placeholder="enter new contact" id="businessContact" type="number" name="businessContact" value={this.state.contact} onChange={this.handleContactChange}/>
        </div>
        <div className="form-group">
          <h3>Enter new location</h3>
          <input className="form-control" placeholder="enter new location" id="businessLocation" type="name" name="businessLocation" value={this.state.location} onChange={this.handleLocationChange}/>
        </div>
        <div class="form-group">
            <label for="sel1">Select new Category:</label>
              <select class="form-control" id="sel1">
                  <option>technology</option>
                  <option>agriculture</option>
                  <option>retail</option>
                  <option>fast-food</option>
                  <option>software</option>
                  <option>hardware</option>
              </select>
        </div>
        <button className="btn btn-info form-button" type="submit">UPDATE BUSINESS</button>
      </form>
        </div>
    );
  }
  }
}

export default UpdateBusiness;
