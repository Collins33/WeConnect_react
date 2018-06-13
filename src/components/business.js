import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Business extends Component {
  render() {
    return (
        <div className = "row">
        <h2 className = "text-center">
          <form onSubmit={this.props.getBusiness}>
            <button class = "btn btn-success" type="submit">SEE BUSINESSES</button>
        </form>
        </h2>
        </div>

    );
  }
}

export default Business;
