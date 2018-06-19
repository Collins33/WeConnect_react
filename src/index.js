import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import About from './components/about';
import Dashboard from './components/dashboard';
import Signup from './components/signup';
import Login from './components/login';
import SearchResults from './components/search_results';
import Business from './components/Business';
// components for routing
import { browserHistory, Router, Route } from 'react-router';

render(

  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/search" component={SearchResults} />
    <Route path="/businesses" component={Business} />
  </Router>,

document.getElementById('root'));

// service workers give the app offline capabilities
registerServiceWorker();
