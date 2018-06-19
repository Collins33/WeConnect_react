import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import '../App.css';

class Intro extends Component {
  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div className="row intro">
        <h2 className="text-center bounce">
        A new way to connect with businesses around you
        </h2>
        </div>
        </Animated>

    );
  }
}

export default Intro;