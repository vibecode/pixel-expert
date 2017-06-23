import React, { Component } from 'react';
import Header from './Header';
import Stats from './Stats';
import '../styles/game.css';

class QuestSolo extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidMount() {
    this.startGame();
  }

  componentWillUnmount() {
    this.initTimer();
  }

  //this needed because component won't remount to the DOM
  // if a previous screen type is the same as a next screen type
  componentWillReceiveProps(nextProps) {
    const nextQuest = nextProps.state.game.currentQuest;
    const { currentQuest } = this.props.state.game;

    if (nextQuest > currentQuest) {
      this.initTimer();
      this.startGame();
    }
  }

  initTimer() {
    const { timeTotal } = this.props.state.game;

    clearInterval(this.timer);
    this.props.updateTime(timeTotal);
  }

  startGame() {
    const { currentQuest } = this.props.state.game;
    const { quests } = this.props.state;

    this.timer = setInterval(() => {
      const { timeLeft } = this.props.state.game;
      if (timeLeft) {
        this.props.updateTime(timeLeft - 1);
      } else {
        this.props.onAnswer(false, currentQuest, quests);
      }
    }, 1000);
  };

  handleAnswerClick = (e) => {
    clearInterval(this.timer);

    const { currentQuest } = this.props.state.game;
    const { quests } = this.props.state;

    const answer = e.target.value;
    const isCorrect = answer === quests[currentQuest].answers[0].type;

    this.props.onAnswer(isCorrect, currentQuest, quests);
  };

  render() {
    const { livesLeft, livesTotal, timeTotal, timeLeft, stats } = this.props.state.game;

    return (
        <div>
          <Header
              livesLeft={livesLeft}
              livesTotal={livesTotal}
              timeTotal={timeTotal}
              timeLeft={timeLeft}
              changeScreen={this.props.changeScreen} />

          <div className="game">
            <p className="game__task">Угадай, фото или рисунок?</p>
            <form className="game__content  game__content--wide">
              <div className="game__option">
                <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455" />
                <label className="game__answer  game__answer--photo">
                  <input
                      name="question1"
                      type="radio"
                      value="photo"
                      onClick={this.handleAnswerClick} />
                  <span>Фото</span>
                </label>
                <label className="game__answer  game__answer--wide  game__answer--paint">
                  <input
                      name="question1"
                      type="radio"
                      value="paint"
                      onClick={this.handleAnswerClick} />
                  <span>Рисунок</span>
                </label>
              </div>
            </form>
          </div>

          <Stats stats={stats} />
        </div>
    );
  }
}

export default QuestSolo;