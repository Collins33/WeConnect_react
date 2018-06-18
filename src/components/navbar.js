import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
        <div className="App">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">WeConnect</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Businesses</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/signup">Sign up</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/search">Search for business</a></li>
                </ul>
                </div>
            </nav>
      </div>
    );
  }
}

export default Navbar;
