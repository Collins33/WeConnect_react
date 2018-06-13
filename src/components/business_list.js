import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class BusinessList extends Component {
  // method to map out the list
  createBusiness = (item) =>{
      return <li>{item.name}</li>
  }

  render() {
      const businessEntries = this.props.businesses;
      const listItems=businessEntries.map(this.createBusiness)
    return (
      <div className="row">
         <ul className="theList">
               {listItems}
            </ul>
      </div>        

    );
  }
}

export default BusinessList;
