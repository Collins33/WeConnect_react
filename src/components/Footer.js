import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  state = {

  }
  render() {
    return (
        <div className="row footer-row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h4>Connect with us online</h4>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <p className="text-center" id="footer-logo">WeConnect</p>
                    <p className="text-center">© 2018 WeConnect All rights reserved.</p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h4>Email us</h4>
                </div>
        </div>

    );
  }
}

export default Footer;
