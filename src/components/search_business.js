import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Search extends Component {
  render() {
    return (
        <div className="App">
            <div className="row search-row">
                <form onSubmit={this.props.searchBusiness}>
                    <div className="form-group">
                       <input className="form-control" placeholder= "Search for a business" type="text" name="search"/>
                       <button className="btn btn-success">Searh for the business</button>
                    </div>
                </form>
            </div>
      </div>
    );
  }
}

export default Search;