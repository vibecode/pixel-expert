import React, { Component } from 'react';
import Header from './Header';
import Stats from './Stats';
import '../styles/game.css';

class QuestSolo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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

      this.setState({
        checked: ''
      })
    }
  }

  handleAnswerClick = (e) => {
    this.setState({
      checked: e.target.value
    });

    clearInterval(this.props.timer);

    const { currentQuestIdx } = this.props.state.game;
    const { quests } = this.props.state;

    const answer = e.target.value;
    const isCorrect = answer === quests[currentQuestIdx].answers[0].type;

    this.props.onAnswer(isCorrect);
  };

  render() {
    const { livesLeft, livesTotal, timeTotal, timeLeft, results, currentQuestIdx } = this.props.state.game;
    const { quests } = this.props.state;
    const { task } = quests[currentQuestIdx];
    const { url, width, height } = quests[currentQuestIdx].answers[0].image;

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
            <form className="game__content  game__content--wide">
              <div className="game__option">
                <img src={url} alt="Option 1" width={width} height={height} />
                <label className="game__answer  game__answer--photo">
                  <input
                      name="question1"
                      type="radio"
                      value="photo"
                      checked={this.state.checked === 'photo'}
                      onChange={this.handleAnswerClick} />
                  <span>Фото</span>
                </label>
                <label className="game__answer  game__answer--wide  game__answer--paint">
                  <input
                      name="question1"
                      type="radio"
                      value="painting"
                      checked={this.state.checked === 'painting'}
                      onChange={this.handleAnswerClick} />
                  <span>Рисунок</span>
                </label>
              </div>
            </form>
          </div>

          <Stats stats={results} />
        </div>
    );
  }
}

export default QuestSolo;
