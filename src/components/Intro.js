import React, { Component } from 'react'
import '../styles/intro.scss'
import { MOTTO } from '../constants/strings'
import Preloader from './Preloader'
import classNames from 'classnames'

class Intro extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const { fetchSuccess, fetchError } = this.props.state.quests
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

export default Intro
