import React, { Component } from 'react';
import Header from './Header';
import Stats from './Stats';
import '../styles/game.css';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';

class QuestDouble extends Component {
  static propTypes = {
    livesLeft: PropTypes.number.isRequired,
    livesTotal: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
    timeTotal: PropTypes.number.isRequired,
    stats: PropTypes.array.isRequired,
    currentQuest: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.answers = new Map();

    this.state = {
      question1: '',
      question2: ''
    };

    this.userAnswers = new Map;
  }

  componentDidMount() {
    this.props.startGame();
  }

  componentWillUnmount() {
    this.props.initTimer();
  }

  //This is necessary because component won't remount
  //if a previous screen type is the same as a next screen type
  componentWillReceiveProps(nextProps) {
    const nextQuest = nextProps.state.game.currentQuest;
    const { currentQuest } = this.props.state.game;

    if (nextQuest > currentQuest) {
      this.props.initTimer();
      this.props.startGame();
    }
  }

  componentWillUpdate() {
    if (this.state.question1 && this.state.question2) {
      clearInterval(this.props.timer);

      const { currentQuest } = this.props.state.game;
      const { quests } = this.props.state;
      const { answers } = quests[currentQuest];

      const isCorrect = (
          this.state.question1 === answers[0].type
          && this.state.question2 === answers[1].type
      );

      this.props.onAnswer(isCorrect, currentQuest, quests);
    }
  }

  handleAnswerClick = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { livesLeft, livesTotal, timeTotal, timeLeft, stats, currentQuest } = this.props.state.game;
    const { quests } = this.props.state;
    const { task, answers } = quests[currentQuest];

    return (
        <div>
          <Header
              livesLeft={livesLeft}
              livesTotal={livesTotal}
              timeTotal={timeTotal}
              timeLeft={timeLeft}
              changeScreen={this.props.changeScreen} />

          <div className="game">
            <p className="game__task">{task}</p>
            <form className="game__content">
              {answers.map(({image}, i) => {
                return (
                    <div className="game__option" key={i}>
                      <img src={image.url} alt={`Option ${i + 1}`} width={image.width} height={image.height} />
                      <label className="game__answer game__answer--photo">
                        <input
                            onChange={this.handleAnswerClick}
                            name={`question${i + 1}`}
                            type="radio"
                            value="photo"
                            checked={this.state[`question${i + 1}`] === "photo"} />
                        <span>Фото</span>
                      </label>
                      <label className="game__answer game__answer--paint">
                        <input
                            onChange={this.handleAnswerClick}
                            name={`question${i + 1}`}
                            type="radio"
                            value="paint"
                            checked={this.state[`question${i + 1}`] === "paint"} />
                        <span>Рисунок</span>
                      </label>
                    </div>
                )
              })}
            </form>

            <Stats stats={stats} />
          </div>
        </div>
    )
  }
}

export default QuestDouble;