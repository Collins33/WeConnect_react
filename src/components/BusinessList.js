import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Animated} from 'react-animated-css';

class BusinessList extends Component {
  // method to map out the list
  createBusiness = (item) =>{
      //map each item into a column
      //return each column
      return <div className="col-xs-12 col-md-12 col-lg-12 well business">
        <h1 className="title well">{item.name}</h1>
        <button className="btn btn-info">Read more ...</button>
        </div>
  }
  

  render() {
      //get the businesses that were passed as props from app.js
      const businessEntries = this.props.businesses;
      //map out the array into col-xs-3
      const listItems=businessEntries.map(this.createBusiness)
      return (
        <div className="row business-row">
        <a href="/addBusiness"><button className="btn btn-success">+ ADD BUSINESS</button></a>
        <h1 className="text-center">ALL BUSINESSES</h1>
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
          {listItems}
        </Animated>
        </div>        

      );
  }
}

export default BusinessList;
