import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as screenTypes from '../constants/screenTypes'
import Header from './Header'
import QuestSolo from './QuestSolo'
import QuestDouble from './QuestDouble'
import QuestTriple from './QuestTriple'
import Stats from './Stats'
import { updateTime, onAnswer, startAgain } from '../actions/game'
import { getScreenType } from '../reducers/game'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

export class Game extends PureComponent {
  constructor(props) {
    super(props)
    this.timer = null
  }

  renderScreen(screenType) {
    const { currentQuestIdx, quests, onAnswer } = this.props

    const props = {
      currentQuestIdx,
      quests,
      onAnswer,
      initTimer: this.initTimer,
      startGame: this.startGame
    }

    switch (screenType) {
      case screenTypes.QUEST_SOLO:
        return <QuestSolo {...props} key="solo" />
      case screenTypes.QUEST_DOUBLE:
        return <QuestDouble {...props} key="double" />
      case screenTypes.QUEST_TRIPLE:
        return <QuestTriple {...props} key="triple" />
      default:
        return null
    }
  }

  initTimer = () => {
    clearInterval(this.timer)
  }

  startGame = () => {
    this.initTimer()

    this.timer = setInterval(() => {
      const { timeLeft } = this.props
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
    const {
      livesLeft,
      livesTotal,
      timeLeft,
      timeTotal,
      results,
      startAgain,
      screenType
    } = this.props

    return (
      <div className={'game-container'}>
        <Header
          livesLeft={livesLeft}
          livesTotal={livesTotal}
          timeLeft={timeLeft}
          timeTotal={timeTotal}
          startAgain={startAgain}
        />
        <ReactCSSTransitionReplace
          transitionName="fade-wait"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={400}
        >
          {this.renderScreen(screenType)}
        </ReactCSSTransitionReplace>
        <Stats stats={results} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.game,
  quests: state.quests,
  screenType: getScreenType(state)
})

export default connect(
  mapStateToProps,
  { onAnswer, updateTime, startAgain }
)(Game)
