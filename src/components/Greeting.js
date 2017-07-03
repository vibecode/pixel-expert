import React, { Component } from 'react';
import * as strings from '../constants/strings';
import '../styles/greeting.css';
import logo from '../img/logo_big.svg';
import arrow from '../img/arrow_right.svg';
import { RULES } from '../constants/screenTypes';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
  }
  handleNextClick = () => {
    this.props.changeScreen(RULES);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mounted: true
      })
    }, 100)
  }

  render() {
    return (
        <div className={"greeting " + (this.state.mounted ? 'show' : '')}>
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
