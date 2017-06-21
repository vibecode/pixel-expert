import React, { Component } from 'react';
import '../styles/intro.css';
import { MOTTO } from '../constants/strings';

class Intro extends Component {
  handleAsteriskClick = () => {
    console.log('clicked');
  };

  render() {
    return (
        <div id="intro" className="intro">
          <h1
              className="intro__asterisk"
              onClick={this.handleAsteriskClick}>*</h1>
          <p className="intro__motto">
            <sup>*</sup>
            {MOTTO}
          </p>
        </div>
    )
  }
}

export default Intro;
