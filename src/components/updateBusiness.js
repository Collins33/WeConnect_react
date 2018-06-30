import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';

class UpdateBusiness extends Component {
  state = {
     business:[],
     loading: true
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
      const newState = Object.assign(this.state, {business: newBusiness}) // new state object
      //store the new state in the component's state
      this.setState(newState)
      // this sets the newState object as our new state
      console.log(this.state.business[0].name)
      this.setState({ loading: false })
    })
    .catch(error =>{
      console.log(error)
    })
  }
  handleChange(event) {
    this.setState({business: event.target.value});
  }

  updateBusinessDetails=(e)=>{
    e.preventDefault()
    console.log("hello")
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
            text: "You successfully added the business",
            icon: "success",
            button: "Explore",
          });}
        ).catch(error =>{
          console.log(error)
        });
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
        <form className="updateForm well" onSubmit={this.updateBusinessDetails}>
        <h1 className="text-center">UPDATE BUSINESS</h1>
        <div className="form-group">
          <h3>Enter new name</h3>
          <input className="form-control" placeholder="enter new name"  type="name" name="businessName" value={this.state.business[0].name}/>
        </div>
        <div className="form-group">
          <h3>Enter new description</h3>
          <input className="form-control" placeholder="enter new description" id="businessDescription" type="name" name="businessDescription" value={this.state.business[0].description}/>
        </div>
        <div className="form-group">
          <h3>Enter new contact</h3>
          <input className="form-control" placeholder="enter new contact" id="businessContact" type="number" name="businessContact" value={this.state.business[0].contact}/>
        </div>
        <div className="form-group">
          <h3>Enter new location</h3>
          <input className="form-control" placeholder="enter new location" id="businessLocation" type="name" name="businessLocation" value={this.state.business[0].location}/>
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
