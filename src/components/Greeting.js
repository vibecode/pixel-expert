import React, { Component } from 'react';
import * as strings from '../constants/strings';
import '../styles/greeting.css';
import logo from '../img/logo_big.svg';
import arrow from '../img/arrow_right.svg';
import { RULES } from '../constants/screenTypes';
import { CSSTransitionGroup } from 'react-transition-group';

class Greeting extends Component {
  handleNextClick = () => {
    this.props.changeScreen(RULES);
  };

  render() {
    return (
        <CSSTransitionGroup
            transitionName="greeting"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
          <div className="greeting">
            <div className="greeting__logo">
              <img src={logo} width="500" height="200" alt="Pixel Hunter" />
            </div>
            <h1 className="greeting__asterisk">*</h1>
            <div className="greeting__challenge">
              <h3 className="greeting__title">{strings.GREETING_TITLE}</h3>
              <div>
                {strings.GREETING_RULES.split('\n').map((line, idx) => <p key={idx}
                                                                          className="greeting__new-line">{line}</p>)}
              </div>
            </div>
            <div className="greeting__continue" onClick={this.handleNextClick}>
              <img src={arrow} width="100" height="100" alt="Next" />
            </div>
          </div>
        </CSSTransitionGroup>
    );
  }
}

export default Greeting;
