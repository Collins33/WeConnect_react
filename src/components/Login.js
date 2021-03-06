import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory} from 'react-router';
import swal from 'sweetalert';

class Login extends Component {
    state = {
        buttonClicked:""
    }
    login = (e) =>{
        e.preventDefault()
        this.setState({buttonClicked:"clicked"})
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        
        axios.post('https://we-connect-muru.herokuapp.com/api/v2/auth/login', {
            email: email,
            password: password,
        }).then(response =>{
            const auth_token = response.data.access_token
            console.log(auth_token)
            // sweet alert pop up
            console.log("Log in successful")
            localStorage.setItem("auth_token", auth_token)
            browserHistory.push('/dashboard')
            swal({
                title: "Success!",
                text: "You successfully logged in",
                icon: "success",
                button: "Explore",
              });
        })
        .catch(error =>{
            // if (error.response.status === 401){
            //     swal("Error!!", "Invalid email or password", "error");
            // }
        });
    }

  render() {
    return (
        <div className="row signuprow">
        <div className="row form-column">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 well">
                <h1 className="text-center title">WeConnect</h1>
                <h1 className="text-center">LOG-IN</h1>
                <form onSubmit={this.login} className="text-center">
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
