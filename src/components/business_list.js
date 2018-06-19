import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class BusinessList extends Component {
  // method to map out the list
  createBusiness = (item) =>{
      //map each item into a column
      //return each column
      return <div className="col-xs-3 col-md-3 col-lg-3 panel">{item.name}</div>
  }
  

  render() {
      //get the businesses that were passed as props from app.js
      const businessEntries = this.props.businesses;
      //map out the array into col-xs-3
      const listItems=businessEntries.map(this.createBusiness)
    return (
      <div className="row">
      <h1 className="text-center">FEATURED BUSINESSES</h1>
        {listItems}
      </div>        

    );
  }
}

export default BusinessList;
