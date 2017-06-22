import React, { Component } from 'react';
import { GREETING } from '../constants/screenTypes';
import '../styles/header.css';
import arrowLeft from '../img/arrow_left.svg';
import logo from '../img/logo_small.png';
import heartFull from '../img/heart__full.svg';
import heartEmpty from '../img/heart__empty.svg';
import v4 from 'uuid/v4';

class Header extends Component {
  constructor(props) {
    super(props);
    this.countDown = null;
  }

  componentDidMount() {
    this.renderTime();
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
    this.props.updateTime(this.props.timeTotal);
  }

  renderTime() {
    this.countDown = setInterval(() => {
      const timeLeft = this.props.timeLeft - 1;
      this.props.updateTime(timeLeft);
    }, 1000);
  };

  renderLives(livesTotal, livesLeft) {
    const lives = new Array(livesTotal - livesLeft);
    lives.fill(<img src={heartEmpty} alt="EmptyLife" width="32" height="32" key={v4()}/>);

    while (livesLeft--) {
      lives.push(<img src={heartFull} alt="Life" width="32" height="32" key={v4()}/>)
    }

    return lives;
  }

  handleBackClick = () => {
    this.props.changeScreen(GREETING);
  };

  render() {
    return (
        <header className="header">
          <div className="header__back" onClick={this.handleBackClick}>
            <span className="back">
              <img src={arrowLeft} width="45" height="45" alt="Back" />
              <img src={logo} width="101" height="44" alt="PixelHunter"/>
            </span>
          </div>
          <h1 className="header__timer">{this.props.timeLeft}</h1>
          <div className="header__lives">
            {this.renderLives(3, 2)}
          </div>
        </header>
    );
  }
}

export default Header;
