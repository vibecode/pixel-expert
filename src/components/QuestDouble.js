import React, { Component } from 'react';
import Header from './Header';
import Stats from './Stats';
import '../styles/game.css';
import v4 from 'uuid/v4';

class QuestDouble extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question1: '',
      question2: ''
    };
  }

  componentDidMount() {
    this.props.startGame();
  }

  componentWillUnmount() {
    this.props.initTimer();
  }

  componentWillReceiveProps(nextProps) {
    const nextQuestIdx = nextProps.state.game.currentQuestIdx;
    const { currentQuestIdx } = this.props.state.game;

    //This is necessary because the component won't remount
    //if a previous screen is the same type as a next screen
    if (nextQuestIdx > currentQuestIdx) {
      this.props.initTimer();
      this.props.startGame();
    }
  }

  componentWillUpdate() {
    if (this.state.question1 && this.state.question2) {
      clearInterval(this.props.timer);

      const { currentQuestIdx } = this.props.state.game;
      const { quests } = this.props.state;
      const { answers } = quests[currentQuestIdx];

      const isCorrect = (
          this.state.question1 === answers[0].type
          && this.state.question2 === answers[1].type
      );

      this.props.onAnswer(isCorrect);
    }
  }

  handleAnswerClick = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    const { livesLeft, livesTotal, timeTotal, timeLeft, results, currentQuestIdx } = this.props.state.game;
    const { quests } = this.props.state;
    const { task, answers } = quests[currentQuestIdx];

    return (
        <div>
          <Header
              livesLeft={livesLeft}
              livesTotal={livesTotal}
              timeTotal={timeTotal}
              timeLeft={timeLeft}
              startAgain={this.props.startAgain} />

          <div className="game">
            <p className="game__task">{task}</p>
            <form className="game__content">
              {answers.map(({ image }, i) => {
                return (
                    <div className="game__option" key={v4()}>
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
                            value="painting"
                            checked={this.state[`question${i + 1}`] === "painting"} />
                        <span>Рисунок</span>
                      </label>
                    </div>
                )
              })}
            </form>

            <Stats stats={results} />
          </div>
        </div>
    )
  }
}

export default QuestDouble;
