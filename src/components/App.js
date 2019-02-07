import React, { Component } from 'react'
import './App.scss'
import Intro from './Intro'
import Greeting from './Greeting'
import Rules from './Rules'
import Game from './Game'
import FinalStats from './FinalStats'
import history from '../history'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { isFetched } from '../reducers/quests'
import { connect } from 'react-redux'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

//workaround to prevent react-transition-group is trying to apply an exit transition to the `Redirect` element
//https://github.com/reactjs/react-transition-group/issues/296#issuecomment-405696619
const Workaround = ({ action, children }) =>
  action === 'REPLACE' ? null : children

const CheckFetch = (isFetched, Component, props) =>
  isFetched ? (
    <Component {...props} />
  ) : (
    <Workaround action={props.history.action}>
      <Redirect to="/" />
    </Workaround>
  )

class App extends Component {
  render() {
    const { isFetched } = this.props
    return (
      <main className="central">
        <Router history={history}>
          <Route
            render={({ location }) => (
              <div className="central__content">
                <ReactCSSTransitionReplace
                  className="transition-container"
                  transitionName="fade-fast"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}
                >
                  <div key={location.pathname}>
                    <Switch location={location}>
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
                        render={props =>
                          CheckFetch(isFetched, FinalStats, props)
                        }
                      />
                    </Switch>
                  </div>
                </ReactCSSTransitionReplace>
              </div>
            )}
          />
        </Router>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  isFetched: isFetched(state)
})

export default connect(mapStateToProps)(App)
