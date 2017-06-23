import React, { Component } from 'react';
import * as screenTypes from '../constants/screenTypes';
import '../styles/app.css';
import Greeting from './Greeting';
import Intro from './Intro';
import Rules from './Rules';
import QuestSolo from './QuestSolo';
import QuestTriple from './QuestTriple';
import QuestDouble from './QuestDouble';

class App extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  renderScreen(screenType) {
    switch (screenType) {
      case screenTypes.INTRO:
        return <Intro changeScreen={this.props.changeScreen}/>;
      case screenTypes.GREETING:
        return <Greeting changeScreen={this.props.changeScreen}/>;
      case screenTypes.RULES:
        return <Rules changeScreen={this.props.changeScreen}/>;
      case screenTypes.QUEST_SOLO:
        return <QuestSolo
            {...this.props}
            initTimer={this.initTimer}
            startGame={this.startGame}
            timer={this.timer} />;
      case screenTypes.QUEST_DOUBLE:
        return <QuestDouble {...this.props} />;
      case screenTypes.QUEST_TRIPLE:
        return <QuestTriple {...this.props} />;
      default:
        throw new Error(`Unknown screenType: ${screenType}`);
    }
  }

  initTimer = () => {
    const { timeTotal } = this.props.state.game;

    clearInterval(this.timer);
    this.props.updateTime(timeTotal);
  };

  startGame = () => {
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

  render() {
    return (
        <main className="central">
          <div className="central__content">
              <div>
                {this.renderScreen(this.props.state.routes.path)}
              </div>
          </div>
        </main>
    );
  }
}

export default App;
