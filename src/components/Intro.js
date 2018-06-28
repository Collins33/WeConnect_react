import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import '../App.css';

class Intro extends Component {
  state = {

  }
  render() {
    return (
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <div className="row intro">
          <h1 className="text-center intro-text title">WeConnect</h1>
          <h2 className="text-center intro-text">
            A new way to connect with businesses around you
          </h2>
          <a href="/businesses"><button  class="btn btn-dark intro-button">EXPLORE</button></a>
        </div>
      </Animated>

    );
  }
}

export default Intro;
