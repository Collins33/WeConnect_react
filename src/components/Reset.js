import React, { Component } from 'react';
import '../App.css';

class Reset extends Component {
    state = {

    }

    render() {
        return (
            <div className="row signuprow">
            <div className="row form-column">
                <div className="col-sm-12 col-md-12 col-lg-12 well">
                    <h1 className="text-center">RESET PASSWORD</h1>
                    <form>
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
