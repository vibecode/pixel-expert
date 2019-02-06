import React, { Component } from 'react'
import * as strings from '../constants/strings'
import './Greeting.scss'
import logo from '../img/logo_big.svg'
import arrow from '../img/arrow_right.svg'

class Greeting extends Component {
  handleNextClick = () => {
    this.props.history.push('/rules')
  }

  render() {
    return (
      <div className="greeting center-screen">
        <div className="greeting__logo">
          <img src={logo} alt="Pixel Expert" />
        </div>

        {/* <h1 className="greeting__asterisk">*</h1> */}
        <div className="greeting__challenge">
          {/*  <h3 className="greeting__title">{strings.GREETING_TITLE}</h3> */}
          {strings.GREETING_RULES.split('\n').map((line, idx) => (
            <p key={idx} className="greeting__new-line">
              {line}
            </p>
          ))}
        </div>
        <div
          className="greeting__continue pulse"
          onClick={this.handleNextClick}
        >
          <img className="arrow" src={arrow} alt="Next" />
        </div>
      </div>
    )
  }
}

export default Greeting
