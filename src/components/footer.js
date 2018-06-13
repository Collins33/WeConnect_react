import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Footer extends Component {
  render() {
    return (
        <div className="row footer-row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <p className="text-center" id="footer-logo">WeConnect</p>
                    <p className="text-center">© 2018 WeConnect All rights reserved.</p>

                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                </div>
        </div>

    );
  }
}

export default Footer;
