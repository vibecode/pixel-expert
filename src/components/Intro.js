import React, { Component } from 'react'
import './Intro.scss'
import { MOTTO } from '../constants/strings'
import Preloader from './Preloader'
import { fetchData } from '../actions/quests'
import { connect } from 'react-redux'
import { isFetched, fetchError } from '../reducers/quests'

class Intro extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  componentDidUpdate(prevProps) {
    const { isFetched } = this.props

    if (isFetched && isFetched !== prevProps.isFetched) {
      setTimeout(() => {
        this.props.history.replace('/greeting')
      }, 1000)
    }
  }

  render() {
    const { fetchError } = this.props

    return (
      <div id="intro" className="intro center-screen">
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

const mapStateToProps = state => ({
  isFetched: isFetched(state),
  fetchError: fetchError(state)
})

export default connect(
  mapStateToProps,
  { fetchData }
)(Intro)
