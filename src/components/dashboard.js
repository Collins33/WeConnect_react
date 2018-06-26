import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Dashboard extends Component {
  state = {

  }
  render() {
    return (
        <div className="row dashboardrow">
          <div className="col-xs-3 col-md-3 col-lg-3 panel dashboardcol well">
            <div className="row">
             <h1 className="text-center">MyProfile</h1>
            </div>
            <div className="row" id="home-row">
              <a href="/"><h1 className="text-center">Home</h1></a>
            </div>
          </div>
          <div className="col-xs-9 col-md-9 col-lg-9">
           <div className="row">
           <a href="/addBusiness"><button className="btn btn-success addBusinessButton">+ ADD BUSINESS</button></a>
           </div>
          </div>
         
        </div>

    );
  }
}

export default Dashboard;
