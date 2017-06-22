import React, { Component } from 'react';
import * as screenTypes from '../constants/screenTypes';
import '../styles/app.css';
import Greeting from './Greeting';
import Intro from './Intro';
import Rules from './Rules';
import GameSolo from '../containers/GameSolo';

class App extends Component {
  renderScreen(screenType) {
    switch (screenType) {
      case screenTypes.INTRO:
        return <Intro changeScreen={this.props.changeScreen}/>;
      case screenTypes.GREETING:
        return <Greeting changeScreen={this.props.changeScreen}/>;
      case screenTypes.RULES:
        return <Rules changeScreen={this.props.changeScreen}/>;
      case screenTypes.GAME_SOLO:
        return <GameSolo />;
      default:
        throw new Error(`Unknown screenType: ${screenType}`);
    }
  }

  render() {
    return (
        <main className="central">
          <div className="central__content">
              <div>
                {this.renderScreen(this.props.route)}
              </div>
          </div>
        </main>
    );
  }
}

export default App;
