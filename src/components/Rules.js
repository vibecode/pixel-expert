import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/rules.css';
import { RULES } from '../constants/strings';
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
    this.props.history.push(`/gamesolo`);
  };

  onInputChange = (e) => {
    this.setState({
      value: e.target.value.trim()
    })
  };

  render() {
    return (
        <div>
          <header className="header">
            <div className="header__back">
              <Link to="/greeting" className="back">
                <img src={arrowLeft} width="45" height="45" alt="Back" />
                <img src={logoSmall} width="101" height="44" />
              </Link>
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
                  onChange={this.onInputChange}
              />
              <button
                  className="rules__button  continue"
                  type="submit"
                  disabled={!this.state.value}
                  onClick={this.handleGoClick}
              >Go!
              </button>
            </form>
          </div>
        </div>
    );
  }
}

export default Rules;