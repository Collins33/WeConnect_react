import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
  state = {

  }
  render() {
    return (
        <div className="row">
            <nav className="navbar navbar-inverse main-navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand title mainTitle" href="/">WeConnect</a>
                    </div>
                    <ul className="nav navbar-nav">
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/businesses">Businesses</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/search">Search for business</a></li>
                        <li><a href="signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
      </div>
    );
  }
}

export default Navbar;
