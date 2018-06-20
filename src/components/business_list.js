import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class BusinessList extends Component {
  // method to map out the list
  createBusiness = (item) =>{
      //map each item into a column
      //return each column
      return <div className="col-xs-12 col-md-12 col-lg-12 well business">
        <h1 className="title">{item.name}</h1>
        <h3>{item.contact}</h3>
        <h3>{item.location}</h3>
        </div>
  }
  

  render() {
      //get the businesses that were passed as props from app.js
      const businessEntries = this.props.businesses;
      //map out the array into col-xs-3
      const listItems=businessEntries.map(this.createBusiness)
    return (
      <div className="row business-row">
      <h1 className="text-center">ALL BUSINESSES</h1>
        {listItems}
      </div>        

    );
  }
}

export default BusinessList;
