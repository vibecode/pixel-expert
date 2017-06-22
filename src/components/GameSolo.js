import React, { Component } from 'react';
import '../styles/game.css';
import Header from './Header';
import Stats from './Stats';

class GameSolo extends Component {
  handleUpdateTime = (timeLeft) => {
    this.props.updateTime(timeLeft);
  };

  render() {
    return (
        <div>
          <Header
              updateTime={this.handleUpdateTime}
              timeTotal={this.props.timeTotal}
              timeLeft={this.props.timeLeft}
              changeScreen={this.props.changeScreen} />
          
          <div className="game">
            <p className="game__task">Угадай, фото или рисунок?</p>
            <form className="game__content  game__content--wide">
              <div className="game__option">
                <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455" />
                <label className="game__answer  game__answer--photo">
                  <input name="question1" type="radio" value="photo" />
                  <span>Фото</span>
                </label>
                <label className="game__answer  game__answer--wide  game__answer--paint">
                  <input name="question1" type="radio" value="paint" />
                  <span>Рисунок</span>
                </label>
              </div>
            </form>
          </div>
          
          <Stats stats={this.props.stats}/>
        </div>
    );
  }
}

export default GameSolo;