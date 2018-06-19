import React, { Component } from 'react';
import '../App.css';

class Business extends Component {
  render() {
    return (
       <div className = "row">
       <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">WeConnect</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/businesses">Businesses</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/signup">Sign up</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/search">Search for business</a></li>
                </ul>
                </div>
            </nav>

       <h1 className="text-center">ALL BUSINESSES</h1>

       </div>

    );
  }
}

export default Business;
