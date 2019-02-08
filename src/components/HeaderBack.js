import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { startAgain } from '../actions/game'
import { withRouter } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../img/arrow_left.svg'
import { ReactComponent as Logo } from '../img/logo_small.svg'

const HeaderBack = props => {
  const handleNewStart = () => {
    props.startAgain()
    props.history.replace('/')
  }

  return (
    <div className="header-back" onClick={handleNewStart}>
      <div className="header-back__svg-container">
        <ArrowLeft className="header-back__arrow" />
        <Logo className="header-back__logo" />
      </div>
    </div>
  )
}
export default withRouter(
  connect(
    null,
    { startAgain }
  )(HeaderBack)
)
