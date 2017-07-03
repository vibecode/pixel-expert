import React, { Component } from 'react';
import '../styles/intro.css';
import { MOTTO } from '../constants/strings';
import Preloader from './Preloader';

class Intro extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { fetchSuccess } = this.props.state.quests;

    return (
        <div id="intro" className={'intro ' + (fetchSuccess ? 'hide' : '')}>
          <Preloader />
          <p className="intro__motto">
            <sup>*</sup>
            {MOTTO}
          </p>
        </div>
    )
  }
}

export default Intro;
