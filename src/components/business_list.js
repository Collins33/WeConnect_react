import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class BusinessList extends Component {
  // method to map out the list
  createBusiness = (item) =>{
      return <div className="col-xs-3 col-md-3 col-lg-3 panel">{item.name}</div>
  }

  render() {
      const businessEntries = this.props.businesses;
      const listItems=businessEntries.map(this.createBusiness)
    return (
      <div className="row">
        {listItems}
      </div>        

    );
  }
}

export default BusinessList;
