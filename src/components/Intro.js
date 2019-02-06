import React, { Component } from 'react'
import './Intro.scss'
import { MOTTO } from '../constants/strings'
import Preloader from './Preloader'
import classNames from 'classnames'
import { fetchData } from '../actions/quests'
import { connect } from 'react-redux'

class Intro extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  componentDidUpdate() {
    if (this.props.fetchSuccess) {
      this.props.history.replace('/greeting')
    }
  }

  render() {
    const { fetchSuccess, fetchError } = this.props
    return (
      <div
        id="intro"
        className={classNames('intro center-screen', { hide: fetchSuccess })}
      >
        {fetchError ? (
          <p className="fetch-error">
            <span>
              Oops :(
              <br />
              Can't download required data
              <br />
              Try to reload the page
            </span>
          </p>
        ) : (
          <Preloader />
        )}
        <p className="intro__motto">
          <sup>*</sup>
          {MOTTO}
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state.quests })

export default connect(
  mapStateToProps,
  { fetchData }
)(Intro)
