import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

class Signup extends Component {
    state = {
        registration:[]
    }
   
    signUp = async (e) =>{
        e.preventDefault()
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const confirm_password = e.target.elements.confirm_password.value;
        axios.post('https://we-connect-muru.herokuapp.com/api/v2/auth/registration', {
            email: email,
            password: password,
            confirm_password: confirm_password
        }).then(response =>{
            console.log("registered user successfully")
            alert("You have successfully registered the user. Login as the user")
        })
        .catch(error => console.log(error));
    }

  render() {
    return (
        <div className="row">
        <h2 className="text-center">
        
        </h2>
        <div className="row form-column">
            <div className="col-sm-12 col-md-12 col-lg-12 well">
                <h1 className="text-center">SIGN-UP</h1>
                <form onSubmit={this.signUp}>
                
                    <div className="form-group">
                        <input className="form-control" placeholder="enter your email" id="email-field" type="email" name="email" />
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="enter password" id="password-field" type="password" name="password"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control" placeholder="confirm password" id="confirm-field" type="password" name="confirm_password"/>
                    </div>

                    <button className="btn btn-info form-button" type="submit">SIGN UP</button>
                </form>
                <p className="text-center">By signing up, you agree to the terms and conditions</p>
                <p className="text-center">Already signed up? <a href="/login"><strong>Log-in</strong></a></p>
            </div>
        </div>
        </div>
    );
  }
}

export default Signup;
