import React, { Component } from 'react';
import '../styles/game.css';
import Header from './Header';
import Stats from './Stats';

class QuestTriple extends Component {

  render() {
    return (
        <div>
          <Header />

          <div className="game">
            <p className="game__task">Найдите рисунок среди изображений</p>
            <form className="game__content  game__content--triple">
              <div className="game__option">
                <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455" />
              </div>
              <div className="game__option  game__option--selected">
                <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455" />
              </div>
              <div className="game__option">
                <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455" />
              </div>
            </form>
          </div>

          <Stats stats={['slow', 'fast', 'slow']} />
        </div>
    );
  }
}

export default QuestTriple;