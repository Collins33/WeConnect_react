import React, { Component } from 'react';
import '../App.css';

class Body extends Component {
  state = {

  }
  render() {
    return (
        <div className="row usage">

          <h2 className="text-center">
            HELP THE COMMUNITY
          </h2>
          <div className="col-xs-4 col-md-4 col-lg-4 first-body">
            <h3 className="text-center">Interact with a business</h3>
          </div>
          <div className="col-xs-4 col-md-4 col-lg-4 second-body">
            <h3 className="text-center">Write a review</h3>
          </div>
          <div className="col-xs-4 col-md-4 col-lg-4 third-body">
            <h3 className="text-center">Post a review</h3>
          </div>
        </div>

    );
  }
}

export default Body;
