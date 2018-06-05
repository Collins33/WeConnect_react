import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import { browserHistory, Router, Route } from 'react-router';
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Signup from "./components/signup";
import Login from "./components/login"

render( 
<Router history={browserHistory}>
<Route path="/" component={App}/>
<Route path="/about" component={About}/>
<Route path="/dashboard" component={Dashboard}/>
<Route path="/signup" component={Signup}/>
<Route path="/login" component={Login}/>
</Router>, 
document.getElementById('root'));
registerServiceWorker();
