import React, { Component } from 'react';
import * as strings from '../constants/strings';
import '../styles/greeting.css';
import logo from '../img/logo_big.svg';
import arrow from '../img/arrow_right.svg';
import { RULES } from '../constants/screenTypes';

class Greeting extends Component {
  handleNextClick = () => {
    this.props.changeScreen(RULES);
  };

  render() {
    return (
        <div className="greeting central--blur">
          <div className="greeting__logo">
            <img src={logo} width="500" height="200" alt="Pixel Hunter" />
          </div>
          <h1 className="greeting__asterisk">*</h1>
          <div className="greeting__challenge">
            <h3 className="greeting__title">{strings.GREETING_TITLE}</h3>
            <div>
              {strings.GREETING_RULES.split('\n').map((line, idx) => <p key={idx} className="greeting__new-line">{line}</p>)}
            </div>
          </div>
          <div className="greeting__continue" onClick={this.handleNextClick}>
              <img src={arrow} width="64" height="64" alt="Next" />
          </div>
        </div>
    );
  }
}

export default Greeting;
