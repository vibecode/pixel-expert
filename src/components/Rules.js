import React, { Component } from 'react';
import '../styles/rules.css';
import { RULES } from '../constants/strings';
import * as screenTypes from '../constants/screenTypes';
import { getScreenType } from '../helpers/helpers';
import arrowLeft from '../img/arrow_left.svg';
import logoSmall from '../img/logo_small.png';

class Rules extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  createRulesMarkup() {
    return { __html: RULES };
  }

  handleGoClick = (e) => {
    e.preventDefault();
    const { quests } = this.props;

    this.props.changeScreen(getScreenType(quests[0]));
  };

  onInputChange = (e) => {
    this.setState({
      value: e.target.value.trim()
    })
  };

  handleBackClick = () => {
    this.props.changeScreen(screenTypes.GREETING);
  };

  render() {
    return (
        <div>
          <header className="header">
            <div className="header__back" onClick={this.handleBackClick}>
              <div className="back">
                <img src={arrowLeft} width="45" height="45" alt="Back" />
                <img src={logoSmall} width="101" height="44" alt="PixelHunter" />
              </div>
            </div>
          </header>
          <div className="rules">
            <h1 className="rules__title">Правила</h1>
            <p className="rules__description" dangerouslySetInnerHTML={this.createRulesMarkup()} />
            <form className="rules__form">
              <input
                  className="rules__input"
                  type="text"
                  placeholder="Ваше Имя"
                  value={this.state.value}
                  onChange={this.onInputChange} />
              <button
                  className="rules__button  continue"
                  type="submit"
                  disabled={!this.state.value}
                  onClick={this.handleGoClick}>
                Go!
              </button>
            </form>
          </div>
        </div>
    );
  }
}

export default Rules;