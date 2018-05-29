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
                    <a class="navbar-brand" href="#">WeConnect</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                </ul>
                </div>
            </nav>
      </div>
    );
  }
}

export default Navbar;