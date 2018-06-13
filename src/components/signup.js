import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Signup extends Component {
  render() {
    return (
        <div className="row">
        <h2 className="text-center">
        
        </h2>
        <div className="row form-column">
            <div className="col-sm-12 col-md-12 col-lg-12 well">
                <h1 className="text-center">SIGN-UP</h1>
                <form>
                    <div className="form-group">
                      <input className="form-control" placeholder="enter your name" id="name-field" type="text"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="enter your email" id="email-field" type="email"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="enter password" id="password-field" type="password"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="confirm password" id="confirm-field" type="password"/>
                    </div>

                    <button className="btn btn-info form-button" type="submit">SIGN UP</button>
                </form>
                <p className="text-center">By signing up, you agree to the terms and conditions</p>
                <p className="text-center">Already signed up? <a href="login.html"><strong>Log-in</strong></a></p>
            </div>
        </div>
        </div>
    );
  }
}

export default Signup;