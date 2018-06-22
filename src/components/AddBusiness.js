import React, { Component } from 'react';
import '../App.css';

class AddBusiness extends Component {
    state = {

    }
  render() {
    return (
        <div className="row form-column">
        <div className="col-sm-12 col-md-12 col-lg-12 well">
            <h1 className="text-center title">WeConnect</h1>
            <h1 className="text-center">ADD BUSINESS</h1>
            <form className="text-center">
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
                <button className="btn btn-info form-button" type="submit">ADD BUSINESS</button>
            </form>
            <a href = "/"><button className="btn btn-primary">Back Home</button></a>
        </div>
    </div>

    );
  }
}

export default AddBusiness;
