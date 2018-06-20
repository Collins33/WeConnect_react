import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

class Login extends Component {
    // state = {
    //     login:[]
    // }
   
    // login = async (e) =>{
    //     e.preventDefault()
    //     const email = e.target.elements.email.value;
    //     const password = e.target.elements.password.value;
        
    //     axios.post('https://we-connect-muru.herokuapp.com/api/v2/auth/login', {
    //         email: email,
    //         password: password,
    //     }).then(response =>{
    //         const login_response = 
    //         // console.log("successfully logged in")
    //         // alert("You have successfully logged in a user.")
    //     })
    //     .catch(error => console.log(error));
    // }

  render() {
    return (
        <div className="row signuprow">
        <div className="row form-column">
            <div className="col-sm-12 col-md-12 col-lg-12 well">
                <h1 className="text-center">LOG-IN</h1>
                <form onSubmit={this.login}>
                    <div className="form-group">
                       <input className="form-control" type="text" placeholder="enter email" id="email-login-field" name="email"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="enter password" id="password-login-field" name="password"/>
                    </div>
                    <button className="btn btn-info form-button" type="submit">Log in</button>
                </form>
                <p className="text-center">Don't have an account?</p>
                <p className="text-center"><a href="/signup"><strong>Sign-up</strong></a></p>
                <p className="text-center"><a href="/reset"><strong>Forgot your password?</strong></a></p>
                <a href = "/"><button className="btn btn-primary">Back Home</button></a>
            </div>
        </div>
        </div>

    );
  }
}

export default Login;