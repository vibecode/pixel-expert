import React, { Component } from 'react';
import '../styles/rules.css';
import { RULES } from '../constants/strings';
import arrowLeft from '../img/arrow_left.svg';
import logoSmall from '../img/logo_small.png';

class Rules extends Component {
  createRulesMarkup() {
    return { __html: RULES };
  }

  render() {
    return (
        <div>
          <header className="header">
            <div className="header__back">
              <span className="back">
                <img src={arrowLeft} width="45" height="45" alt="Back" />
                <img src={logoSmall} width="101" height="44" />
              </span>
            </div>
          </header>
          <div className="rules">
            <h1 className="rules__title">Правила</h1>
            <p className="rules__description" dangerouslySetInnerHTML={this.createRulesMarkup()} />
            <form className="rules__form">
              <input className="rules__input" type="text" placeholder="Ваше Имя" />
              <button className="rules__button  continue" type="submit" disabled>Go!</button>
            </form>
          </div>
        </div>
    );
  }
}

export default Rules;