import App from './components/App';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './components/about';
import Intro from './components/intro'

export default(
    <Route path="/" component={App}>
      <IndexRoute component={Intro} />
      <Route path="/about" component={About}/>
    </Route>
);

