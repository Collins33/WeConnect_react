import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import swal from 'sweetalert';

class Reset extends Component {
    state = {

    }
    
    reset= (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value;
        axios.post('https://we-connect-muru.herokuapp.com/api/v2/auth/reset-password', {
            email: email,
        }).then(response =>{
            console.log("password reset successfully")
            // sweet alert pop up
            swal({
                title: "Success!",
                text: "Password reset successfully",
                icon: "success",
                button: "Log in",
              });
        })
        .catch(error => console.log(error));
    }
    render() {
        return (
            <div className="row signuprow">
            <div className="row form-column">
                <div className="col-sm-12 col-md-12 col-lg-12 well">
                    <h1 className="text-center">RESET PASSWORD</h1>
                    <form onSubmit={this.reset}>
                        <div className="form-group">
                        <input className="form-control" type="text" placeholder="enter email" id="email-login-field" name="email"/>
                        </div>
                        <button className="btn btn-info form-button" type="submit">Reset password</button>
                    </form>
                    <a href = "/"><button className="btn btn-primary">Back Home</button></a>
                </div>
            </div>
            </div>

        );
    }
}

export default Reset;
