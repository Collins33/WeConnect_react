import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import '../App.css';

class UpdateBusiness extends Component {
  state = {
     business=[]
  }
  render() {
    return (
        <div className="row signuprow">
        <form className="updateForm well">
        <h1 className="text-center">UPDATE BUSINESS</h1>
        <div className="form-group">
          <h3>Enter new name</h3>
          <input className="form-control" placeholder="enter new name"  type="name" name="businessName"/>
        </div>
        <div className="form-group">
          <h3>Enter new description</h3>
          <input className="form-control" placeholder="enter new description" id="businessDescription" type="name" name="businessDescription"/>
        </div>
        <div className="form-group">
          <h3>Enter new contact</h3>
          <input className="form-control" placeholder="enter new contact" id="businessContact" type="number" name="businessContact"/>
        </div>
        <div className="form-group">
          <h3>Enter new location</h3>
          <input className="form-control" placeholder="enter new location" id="businessLocation" type="name" name="businessLocation"/>
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

export default UpdateBusiness;
