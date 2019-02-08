import React, { Component } from 'react'
import './Game.scss'

class QuestDouble extends Component {
  constructor(props) {
    super(props)
    this.answers = new Map()

    this.state = {
      question1: '',
      question2: ''
    }
  }

  componentDidMount() {
    this.props.startGame()
  }

  handleAnswerClick = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    this.answers.set(e.target.name, e.target.value)

    if (this.answers.has('question_1') && this.answers.has('question_2')) {
      this.props.initTimer()

      const { currentQuestIdx, quests } = this.props
      const { answers } = quests[currentQuestIdx]

      const isCorrect =
        this.answers.get('question_1') === answers[0].type &&
        this.answers.get('question_2') === answers[1].type

      this.props.onAnswer(isCorrect)
    }
  }

  render() {
    const { currentQuestIdx, quests } = this.props
    const { task, answers } = quests[currentQuestIdx]

    return (
      <div className="game">
        <p className="game__task">{task}</p>
        <form className="game__content">
          {answers.map(({ image }, i) => {
            return (
              <div className="game__option" key={i}>
                <img
                  src={image.url}
                  alt={`Option ${i + 1}`}
                  width={image.width}
                  height={image.height}
                />
                <label className="game__answer game__answer--photo">
                  <input
                    onChange={this.handleAnswerClick}
                    name={`question_${i + 1}`}
                    type="radio"
                    value="photo"
                    checked={this.state[`question_${i + 1}`] === 'photo'}
                  />
                  <span>Фото</span>
                </label>
                <label className="game__answer game__answer--paint">
                  <input
                    onChange={this.handleAnswerClick}
                    name={`question_${i + 1}`}
                    type="radio"
                    value="painting"
                    checked={this.state[`question_${i + 1}`] === 'painting'}
                  />
                  <span>Рисунок</span>
                </label>
              </div>
            )
          })}
        </form>
      </div>
    )
  }
}

export default QuestDouble
