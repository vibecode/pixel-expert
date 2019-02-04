import React, { Component } from 'react'
import HeaderBack from './HeaderBack'
import '../styles/header.scss'
import heartFull from '../img/heart__full.svg'
import heartEmpty from '../img/heart__empty.svg'

class Header extends Component {
  renderLives(livesTotal, livesLeft) {
    const livesEmpty = new Array(livesTotal - livesLeft).fill(false)
    const livesFull = new Array(livesLeft).fill(true)

    return [...livesEmpty, ...livesFull].map((value, idx) => (
      <img
        src={value ? heartFull : heartEmpty}
        alt="Life"
        width="32"
        height="32"
        key={idx}
      />
    ))
  }

  render() {
    return (
      <header className="header">
        <HeaderBack startAgain={this.props.startAgain} />

        <h1 className="header__timer">{this.props.timeLeft}</h1>
        <div className="header__lives">
          {this.renderLives(this.props.livesTotal, this.props.livesLeft)}
        </div>
      </header>
    )
  }
}

export default Header
