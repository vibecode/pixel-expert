import React, { Component } from 'react'
import './Game.scss'

class QuestSolo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: ''
    }
  }

  componentDidMount() {
    this.props.startGame()
  }

  componentDidUpdate(prevProps) {
    const prevOuestIndex = prevProps.currentQuestIdx
    const { currentQuestIdx } = this.props

    //This is necessary because the component won't remount
    //if a previous screen is the same type as a next screen
    if (currentQuestIdx > prevOuestIndex) {
      this.props.initTimer()
      this.props.startGame()

      this.setState({
        checked: ''
      })
    }
  }

  handleAnswerClick = e => {
    this.setState({
      checked: e.target.value
    })

    this.props.initTimer()

    const { currentQuestIdx, quests } = this.props

    const answer = e.target.value
    const isCorrect = answer === quests[currentQuestIdx].answers[0].type

    this.props.onAnswer(isCorrect)
  }

  render() {
    const { quests, currentQuestIdx } = this.props
    const { task } = quests[currentQuestIdx]
    const { url, width, height } = quests[currentQuestIdx].answers[0].image

    return (
      <div className="game">
        <p className="game__task">{task}</p>
        <form className="game__content  game__content--wide">
          <div className="game__option">
            <img src={url} alt="Option 1" width={width} height={height} />
            <label className="game__answer  game__answer--photo">
              <input
                name="question1"
                type="radio"
                value="photo"
                checked={this.state.checked === 'photo'}
                onChange={this.handleAnswerClick}
              />
              <span>Фото</span>
            </label>
            <label className="game__answer  game__answer--wide  game__answer--paint">
              <input
                name="question1"
                type="radio"
                value="painting"
                checked={this.state.checked === 'painting'}
                onChange={this.handleAnswerClick}
              />
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default QuestSolo
