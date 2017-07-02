import React, { Component } from 'react';
import '../styles/intro.css';
import { MOTTO } from '../constants/strings';
import { GREETING } from '../constants/screenTypes';

class Intro extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleOnClick = () => {
    this.props.changeScreen(GREETING);
  };

  render() {
    return (
        <div id="intro" className="intro">
          <h1 className="intro__asterisk" onClick={this.handleOnClick}>*</h1>
          <p className="intro__motto">
            <sup>*</sup>
            {MOTTO}
          </p>
        </div>
    )
  }
}

export default Intro;
