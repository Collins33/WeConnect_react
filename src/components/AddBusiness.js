import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';

class AddBusiness extends Component {
    state = {

    }
    addBusiness= (e)=>{
        e.preventDefault()
        // method to add business
        // get token from localstorage
        const auth_token = localStorage.getItem("auth_token")
        const category = "technology"
        // get data from the form
        const name = e.target.elements.businessName.value;
        const description = e.target.elements.description.value;
        const contact = e.target.elements.contact.value;
        const location = e.target.elements.location.value;
        // create the payloads
        const config = {
            // config with the token
            headers: {'Authorization': "bearer " + auth_token}
        }
        // payload containing business information
        const payload = {
            name:name,
            description: description,
            contact: contact,
            location: location,
            category: category
        }
        // make post request using axios and pass the payloads
        axios.post('https://we-connect-muru.herokuapp.com/api/v2/businesses',
        payload,config).then(response =>{
        console.log(response)
        swal({
            title: "Success!",
            text: "You successfully added the business",
            icon: "success",
            button: "Explore",
          });
        }).catch(error => console.log(error));
    }

  render() {
    return (
        <div className="row signuprow">
        <div className="row form-column">
        <div className="col-sm-12 col-md-12 col-lg-12 well">
            <h1 className="text-center title">WeConnect</h1>
            <h1 className="text-center">ADD BUSINESS</h1>
            <form className="text-center" onSubmit={this.addBusiness}>
                <div className="form-group">
                    <input className="form-control" placeholder="enter business name" id="name-field" type="name" name="businessName" />
                </div>

                <div className="form-group">
                    <input className="form-control" placeholder="enter business description" id="description-field" type="name" name="description"/>
                </div>

                <div className="form-group">
                    <input className="form-control" placeholder="enter business contact" id="contact-field" type="number" name="contact"/>
                </div>
                
                <div className="form-group">
                    <input className="form-control" placeholder="enter business location" id="location-field" type="name" name="location"/>
                </div>
                {/* <div className="form-group">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select category
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="#">fast-food</a></li>
                        <li><a href="#">technology</a></li>
                        <li><a href="#">hardware</a></li>
                        <li><a href="#">hospitality</a></li>
                        <li><a href="#">education</a></li>
                    </ul>
                </div>
                </div> */}
                <button className="btn btn-info form-button" type="submit">ADD BUSINESS</button>
            </form>
            <a href = "/"><button className="btn btn-primary">Back Home</button></a>
        </div>
    </div>
    </div>
    );
  }
}

export default AddBusiness;
