import React, { Component } from 'react';
import '../styles/rules.css';
import { RULES } from '../constants/strings';
import * as screenTypes from '../constants/screenTypes';
import { getScreenType } from '../helpers/helpers';
import HeaderBack from './HeaderBack';
import photoIcon from '../img/photo_icon.png';
import paintIcon from '../img/paint_icon.png';

class Rules extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
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
          <HeaderBack startAgain={this.handleBackClick} />
          <div className="rules">
            <h1 className="rules__title">{RULES.HEADING}</h1>
            <div className="rules__description__block">
              <span className="rules__description">{RULES.FIRST_LINE_PART_1}
                <img className="rules_icon" src={photoIcon} width="24" height="24" alt="photo" />
                {RULES.FIRST_LINE_PART_2}
                <img className="rules_icon" src={paintIcon} width="24" height="24" alt="painting" /><br />
              </span>
              {RULES.BODY.split('\n').map((line, idx) => <span key={idx} className="rules__description">{line}<br /></span>)}
            </div>
            <form className="rules__form">
              <input
                  className="rules__input"
                  type="text"
                  placeholder="Your name"
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