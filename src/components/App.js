import React, { Component } from 'react';
import * as screenTypes from '../constants/screenTypes';
import '../styles/app.css';
import Greeting from './Greeting';
import Intro from './Intro';
import Rules from './Rules';
import QuestSolo from './QuestSolo';
import QuestTriple from './QuestTriple';

class App extends Component {
  renderScreen(screenType) {
    switch (screenType) {
      case screenTypes.INTRO:
        return <Intro changeScreen={this.props.changeScreen}/>;
      case screenTypes.GREETING:
        return <Greeting changeScreen={this.props.changeScreen}/>;
      case screenTypes.RULES:
        return <Rules changeScreen={this.props.changeScreen}/>;
      case screenTypes.QUEST_SOLO:
        return <QuestSolo {...this.props} />;
      case screenTypes.QUEST_TRIPLE:
        return <QuestTriple {...this.props} />;
      case screenTypes.QUEST_DOUBLE:

      default:
        throw new Error(`Unknown screenType: ${screenType}`);
    }
  }

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
