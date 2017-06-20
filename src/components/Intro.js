import React, { Component } from 'react';
import '../styles/intro.css';

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
            'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
          </p>
        </div>
    )
  }
}

export default Intro;
