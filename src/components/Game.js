import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as screenTypes from '../constants/screenTypes'
import Header from './Header'
import QuestSolo from './QuestSolo'
import QuestDouble from './QuestDouble'
import QuestTriple from './QuestTriple'
import Stats from './Stats'
import { updateTime, onAnswer, startAgain } from '../actions/game'

export class Game extends PureComponent {
  constructor(props) {
    super(props)
    this.timer = null
  }

  componentDidMount() {
    if (!this.props.quests.fetchSuccess) {
      this.props.history.replace('/')
    }
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
        return <QuestSolo {...props} />
      case screenTypes.QUEST_DOUBLE:
        return <QuestDouble {...props} />
      case screenTypes.QUEST_TRIPLE:
        return <QuestTriple {...props} />
      default:
        throw new Error(`Unknown screenType: ${screenType}`)
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
      currentQuestIdx,
      results,
      startAgain
    } = this.props
    const screenType = this.props.quests[currentQuestIdx].type

    return (
      <div className={'game-container'}>
        <Header
          livesLeft={livesLeft}
          livesTotal={livesTotal}
          timeLeft={timeLeft}
          timeTotal={timeTotal}
          startAgain={startAgain}
        />
        {this.renderScreen(screenType)}
        <Stats stats={results} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.game,
  quests: state.quests
})

export default connect(
  mapStateToProps,
  { onAnswer, updateTime, startAgain }
)(Game)
