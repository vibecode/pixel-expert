import React, { Component } from 'react'
import './App.scss'
import Intro from './Intro'
import Greeting from './Greeting'
import Rules from './Rules'
import Game from './Game'
import FinalStats from './FinalStats'
import history from '../history'
import { Router, Route, Redirect } from 'react-router-dom'
import { isFetched } from '../reducers/quests'
import { connect } from 'react-redux'

const CheckFetch = (isFetched, Component, props) =>
  isFetched ? <Component {...props} /> : <Redirect to="/" />

class App extends Component {
  render() {
    const { isFetched } = this.props
    return (
      <main className="central">
        <Router history={history}>
          <div className="central__content">
            <Route path="/" exact component={Intro} />
            <Route
              path="/greeting"
              render={props => CheckFetch(isFetched, Greeting, props)}
            />
            <Route
              path="/rules"
              render={props => CheckFetch(isFetched, Rules, props)}
            />
            <Route
              path="/game"
              render={props => CheckFetch(isFetched, Game, props)}
            />
            <Route
              path="/stats"
              render={props => CheckFetch(isFetched, FinalStats, props)}
            />
          </div>
        </Router>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  isFetched: isFetched(state)
})

export default connect(mapStateToProps)(App)
