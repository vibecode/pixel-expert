import React, { Component } from 'react'
import * as screenTypes from '../constants/screenTypes'
import '../styles/app.scss'
import Intro from './Intro'
import Greeting from './Greeting'
import Rules from './Rules'
import QuestSolo from './QuestSolo'
import QuestDouble from './QuestDouble'
import QuestTriple from './QuestTriple'
import FinalStats from './FinalStats'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  constructor(props) {
    super(props)

    this.timer = null
  }

  renderScreen(screenType) {
    switch (screenType) {
      case screenTypes.INTRO:
        return <Intro {...this.props} key="intro" />
      case screenTypes.GREETING:
        return <Greeting {...this.props} key="greeting" />
      case screenTypes.RULES:
        return <Rules {...this.props} quests={this.props.state.quests} />
      case screenTypes.QUEST_SOLO:
        return (
          <QuestSolo
            {...this.props}
            initTimer={this.initTimer}
            startGame={this.startGame}
            timer={this.timer}
            key="solo"
          />
        )
      case screenTypes.QUEST_DOUBLE:
        return (
          <QuestDouble
            {...this.props}
            initTimer={this.initTimer}
            startGame={this.startGame}
            timer={this.timer}
            key="double"
          />
        )
      case screenTypes.QUEST_TRIPLE:
        return (
          <QuestTriple
            {...this.props}
            initTimer={this.initTimer}
            startGame={this.startGame}
            timer={this.timer}
            key="triple"
          />
        )
      case screenTypes.FINAL_STATS:
        return (
          <FinalStats
            state={this.props.state}
            startAgain={this.props.startAgain}
            key="final"
          />
        )
      default:
        throw new Error(`Unknown screenType: ${screenType}`)
    }
  }

  initTimer = () => {
    const { timeTotal } = this.props.state.game

    clearInterval(this.timer)
    this.props.updateTime(timeTotal)
  }

  startGame = () => {
    this.initTimer()

    this.timer = setInterval(() => {
      const { timeLeft } = this.props.state.game
      console.log(timeLeft)
      if (timeLeft) {
        this.props.updateTime(timeLeft - 1)
      } else {
        this.props.onAnswer(false)
      }
    }, 1000)
  }

  componentWillUnmount() {
    this.initTimer()
  }

  render() {
    const { path } = this.props.state.routes

    return (
      <main className="central">
        <div className="central__content">
          <TransitionGroup>
            <CSSTransition
              unmountOnExit
              timeout={300}
              classNames="fade"
              key={this.props.state.game.currentQuestIdx}
            >
              {this.renderScreen(path)}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </main>
    )
  }
}

export default App
