import React from 'react'
import arrowLeft from '../img/arrow_left.svg'
import logo from '../img/logo_small.svg'
import './Header.scss'
import { connect } from 'react-redux'
import { startAgain } from '../actions/game'
import { withRouter } from 'react-router-dom'

const HeaderBack = props => {
  const handleNewStart = () => {
    props.startAgain()
    props.history.replace('/')
  }

  return (
    <div className="header__back" onClick={handleNewStart}>
      <span className="back">
        <img src={arrowLeft} width="45" height="45" alt="Back" />
        <img src={logo} width="101" height="44" alt="PixelHunter" />
      </span>
    </div>
  )
}
export default withRouter(
  connect(
    null,
    { startAgain }
  )(HeaderBack)
)
