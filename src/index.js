import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import { render } from 'react-dom';
import './index.css';

import App from './App'
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import SearchResults from './components/SearchResults';
import Business from './components/Business';
import Reset from './components/Reset';
import AddBusiness from './components/AddBusiness';
import BusinessDetails from './components/BusinessDetails';
import UpdateBusiness from './components/UpdateBusiness';
// components for routing


render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/search" component={SearchResults} />
    <Route path="/businesses" component={Business} />
    <Route path="/reset" component={Reset} />
    <Route path="/addBusiness" component={AddBusiness} />
    <Route path="/business/:id" component={BusinessDetails} />
    <Route path="/business/:id/updateBusiness" component={UpdateBusiness} />
  </Router>,
document.getElementById('root'),
);
