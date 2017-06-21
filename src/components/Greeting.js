import React, { Component } from 'react';
import * as strings from '../constants/strings';
import '../styles/greeting.css';
import logo from '../img/logo_big.png';
import arrow from '../img/arrow_right.svg';

class Greeting extends Component {

  render() {
    return (
        <div className="greeting central--blur">
          <div className="greeting__logo">
            <img src={logo} width="201" height="89" alt="Pixel Hunter" />
          </div>
          <h1 className="greeting__asterisk">*</h1>
          <div className="greeting__challenge">
            <h3 className="greeting__title">{strings.GREETING_TITLE}</h3>
            <p>
              {strings.GREETING_RULES.split('\n').map(line => <p className="greeting__new-line">{line}</p>)}
            </p>
          </div>
          <div className="greeting__continue">
            <span>
              <img src={arrow} width="64" height="64" alt="Next" />
            </span>
          </div>
        </div>
    );
  }
}

export default Greeting;
