import React, { Component } from 'react';
import '../styles/header.css';
import arrowLeft from '../img/arrow_left.svg';
import logo from '../img/logo_small.png';
import heartFull from '../img/heart__full.svg';
import heartEmpty from '../img/heart__empty.svg';

class Header extends Component {
  renderLives(livesTotal, livesLeft) {
    const lives = new Array(livesTotal - livesLeft);
    lives.fill(<img src={heartEmpty} alt="EmptyLife" width="32" height="32" />);

    while (livesLeft--) {
      lives.push(<img src={heartFull} alt="Life" width="32" height="32" />)
    }

    return lives;
  }

  render() {
    return (
        <header className="header">
          <div className="header__back">
            <span className="back">
              <img src={arrowLeft} width="45" height="45" alt="Back" />
              <img src={logo} width="101" height="44" />
            </span>
          </div>
          <h1 className="header__timer">{this.props.time}</h1>
          <div className="header__lives">
            {this.renderLives(3, 2)}
          </div>
        </header>
    );
  }
}

export default Header;