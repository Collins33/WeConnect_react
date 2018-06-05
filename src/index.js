import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import { browserHistory, Router, Route } from 'react-router';
import About from "./components/about"

render( 
<Router history={browserHistory}>
<Route path="/" component={App}/>
<Route path="/about" component={About}/>
</Router>, 
document.getElementById('root'));
registerServiceWorker();
