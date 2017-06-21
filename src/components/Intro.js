import React, { Component } from 'react';
import '../styles/intro.css';
import { MOTTO } from '../constants/strings';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    return (
        <div id="intro" className="intro">
          <Link className="intro__asterisk" to="/greeting">*</Link>
          <p className="intro__motto">
            <sup>*</sup>
            {MOTTO}
          </p>
        </div>
    )
  }
}

export default Intro;
