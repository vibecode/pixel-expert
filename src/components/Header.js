import React, { Component } from 'react';
import HeaderBack from './HeaderBack';
import '../styles/header.css';
import heartFull from '../img/heart__full.svg';
import heartEmpty from '../img/heart__empty.svg';
import v4 from 'uuid/v4';

class Header extends Component {
  renderLives(livesTotal, livesLeft) {
    const lives = [];
    let livesEmpty = livesTotal - livesLeft;

    while(livesEmpty--) {
      lives.push(<img src={heartEmpty} alt="EmptyLife" width="32" height="32" key={v4()}/>);
    }

    while(livesLeft--) {
      lives.push(<img src={heartFull} alt="Life" width="32" height="32" key={v4()}/>);
    }

    return lives;
  }

  render() {
    return (
        <header className="header">
          <HeaderBack startAgain={this.props.startAgain}/>

          <h1 className="header__timer">{this.props.timeLeft}</h1>
          <div className="header__lives">
            {this.renderLives(this.props.livesTotal, this.props.livesLeft)}
          </div>
        </header>
    );
  }
}

export default Header;
