import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Login extends Component {
  render() {
    return (
        <div className="row">
        <h2 className="text-center">
       Login
        </h2>
        <div className="row form-column">
            <div className="col-sm-12 col-md-12 col-lg-12 well">
                <h1 className="text-center">LOG-IN</h1>
                <form>
                    <div className="form-group">
                       <input className="form-control" type="text" placeholder="enter email" id="email-login-field"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="enter password" id="password-login-field"/>
                    </div>
                    <button className="btn btn-info form-button" type="submit">Log in</button>
                </form>
                <p className="text-center">Don't have an account?</p>
                <p className="text-center"><a href="registration.html"><strong>Sign-up</strong></a></p>
            </div>
        </div>
        </div>

    );
  }
}

export default Login;