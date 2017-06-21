import React, { Component } from 'react';
import Header from './Header';
import Stats from './Stats';
import '../styles/game.css';

class GameOne extends Component {
  render() {
    return (
        <div>
          <Header />

          <div className="game">
            <p className="game__task">Угадайте для каждого изображения фото или рисунок?</p>
            <form className="game__content">
              <div className="game__option">
                <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458" />
                <label className="game__answer game__answer--photo">
                  <input name="question1" type="radio" value="photo" />
                  <span>Фото</span>
                </label>
                <label className="game__answer game__answer--paint">
                  <input name="question1" type="radio" value="paint" />
                  <span>Рисунок</span>
                </label>
              </div>
              <div className="game__option">
                <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458" />
                <label className="game__answer  game__answer--photo">
                  <input name="question2" type="radio" value="photo" />
                  <span>Фото</span>
                </label>
                <label className="game__answer  game__answer--paint">
                  <input name="question2" type="radio" value="paint" />
                  <span>Рисунок</span>
                </label>
              </div>
            </form>

            <Stats stats={['unknown', 'fast']}/>
          </div>
        </div>
    )
  }
}

export default GameOne;