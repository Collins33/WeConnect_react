import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import swal from 'sweetalert';
import { browserHistory} from 'react-router';

class Signup extends Component {
    state = {
        buttonClicked:""
    }
   
    signUp = (e) =>{
        e.preventDefault()
        this.setState({buttonClicked:"clicked"})
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const confirm_password = e.target.elements.confirm_password.value;
        axios.post('https://we-connect-muru.herokuapp.com/api/v2/auth/registration', {
            email: email,
            password: password,
            confirm_password: confirm_password
        }).then(response =>{
            console.log("registered user successfully")
            browserHistory.push('/login')
            // sweet alert pop up
            swal({
                title: "Success!",
                text: "You successfully registered",
                icon: "success",
                button: "Log in",
              });
              console.log(this.state)  
        })
        .catch(error => {
            // if (error.response.status === 409){
            //     this.setState({buttonClicked:"clicked"})
            //     const message = error.response.data.message
            //     swal("Error!!", message, "error");
            //     console.log(this.state)
            // }
            // else if(error.response.status === 400){
            //     this.setState({buttonClicked:"clicked"})
            //     const message = error.response.data[0].message
            //     console.log(message)
            //     swal("Error!!", message, "error");
            //     console.log(this.state)
            // }
            
        });
    }

  render() {
    return (
        <div className="row signuprow">
        <h2 className="text-center">
        
        </h2>
        <div className="row form-column">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 well">
                <h1 className="text-center title">WeConnect</h1>
                <h1 className="text-center">SIGN-UP</h1>
                <form onSubmit={this.signUp} className="text-center">
                
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
                <a href = "/"><button className="btn btn-primary">Back Home</button></a>
            </div>
        </div>
        </div>
    );
  }
}

export default Signup;
