import React, { Component } from 'react'
import * as strings from '../constants/strings'
import '../styles/greeting.scss'
import logo from '../img/logo_big.svg'
import arrow from '../img/arrow_right.svg'
import { RULES } from '../constants/screenTypes'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Greeting extends Component {
  handleNextClick = () => {
    this.props.changeScreen(RULES)
  }

  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          classNames="greeting"
          timeout={{ enter: 500, exit: 500 }}
        >
          <div className="greeting center-screen">
            <div className="greeting__logo">
              <img src={logo} width="500" height="200" alt="Pixel Expert" />
            </div>
            {/* <h1 className="greeting__asterisk">*</h1> */}
            <div className="greeting__challenge">
              {/*  <h3 className="greeting__title">{strings.GREETING_TITLE}</h3> */}
              <div>
                {strings.GREETING_RULES.split('\n').map((line, idx) => (
                  <p key={idx} className="greeting__new-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="greeting__continue pulse"
              onClick={this.handleNextClick}
            >
              <img
                className="arrow"
                src={arrow}
                width="300"
                height="100"
                alt="Next"
              />
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Greeting
