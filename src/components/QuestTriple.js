import React, { Component } from 'react';
import '../styles/game.css';
import Header from './Header';
import Stats from './Stats';

class QuestTriple extends Component {
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

  handleAnswerClick = (e) => {
    clearInterval(this.props.timer);

    const { currentQuestIdx } = this.props.state.game;
    const { quests } = this.props.state;
    const { answers } = quests[currentQuestIdx];

    const findCorrectAnswer = (answers) => {
      const count = answers.reduce((acc, { type }) => {
        return { ...acc, [type]: (acc[type] || 0) + 1 };
      }, {});
      return Object.keys(count).filter(key => count[key] === 1).join('');
    };

    const isCorrect = answers[e.target.id].type === findCorrectAnswer(answers);

    this.props.onAnswer(isCorrect);
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
            <form className="game__content  game__content--triple">
              {answers.map(({ image }, i) => {
                return (
                    <div className="game__option" key={image.url} id={i} onClick={this.handleAnswerClick}>
                      <img src={image.url} alt={`option-${i + 1}`} width={image.width} height={image.height} />
                    </div>
                )
              })}
            </form>
          </div>

          <Stats stats={results} />
        </div>
    );
  }
}

export default QuestTriple;
