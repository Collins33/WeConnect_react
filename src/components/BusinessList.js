import React, { Component } from 'react';
import logo from '../logo.svg';
import {Animated} from 'react-animated-css';
import { browserHistory} from 'react-router';

class BusinessList extends Component {
  // method to map out the list
  createBusiness = (item) =>{
      //map each item into a column
      //return each column
      return <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 well business">
        <h1 className="title well">{item.name}</h1>
        <button className="btn btn-info" onClick={(e) => this.showBusinessDetails(item.id, e)}>Read more ...</button>
        </div>
  }

  // method to redirect to the component displaying details about the business
  showBusinessDetails = (business_id) =>{
    console.log(business_id)
    const business_detail_route = `/business/${business_id}`
    browserHistory.push(business_detail_route)   
  }

  render() {
      //get the businesses that were passed as props from app.js
      const businessEntries = this.props.businesses;
      //map out the array into col-xs-3
      const listItems=businessEntries.map(this.createBusiness)
      
      if (this.props.businesses.length >0){
      return (
        <div className="row business-row">
        <h1 className="text-center">ALL BUSINESSES</h1>
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
          {listItems}
        </Animated>
        </div>        

      );
    }
    else{
    return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="loaderImage"/>
    )
  }

      
  }
}

export default BusinessList;
