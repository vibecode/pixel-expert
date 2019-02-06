import React, { Component } from 'react'
import './Game.scss'

class QuestTriple extends Component {
  componentDidMount() {
    this.props.startGame()
  }

  componentDidUpdate(prevProps) {
    const prevOuestIndex = prevProps.currentQuestIdx
    const { currentQuestIdx } = this.props

    if (currentQuestIdx > prevOuestIndex) {
      this.props.initTimer()
      this.props.startGame()
    }
  }

  handleAnswerClick = e => {
    this.props.initTimer()

    const answerId = e.target.id
    const { currentQuestIdx, quests } = this.props
    const { answers } = quests[currentQuestIdx]

    const findCorrectAnswer = answers => {
      const count = answers.reduce((acc, { type }) => {
        return { ...acc, [type]: (acc[type] || 0) + 1 }
      }, {})
      return Object.keys(count)
        .filter(key => count[key] === 1)
        .join('')
    }

    const isCorrect = answers[answerId].type === findCorrectAnswer(answers)

    this.props.onAnswer(isCorrect)
  }

  render() {
    const { currentQuestIdx, quests } = this.props
    const { task, answers } = quests[currentQuestIdx]

    return (
      <div className="game">
        <p className="game__task">{task}</p>
        <form className="game__content  game__content--triple">
          {answers.map(({ image }, i) => {
            return (
              <div className="game__option" key={i}>
                <img
                  src={image.url}
                  alt={`option-${i + 1}`}
                  width={image.width}
                  height={image.height}
                  id={i}
                  onClick={this.handleAnswerClick}
                />
              </div>
            )
          })}
        </form>
      </div>
    )
  }
}

export default QuestTriple
