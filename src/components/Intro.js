import React, { Component } from 'react';
import autobind from 'autobind-decorator';

class Intro extends Component {
  @autobind
  handleAsteriskClick() {
    console.log('clicked');
  }

  render() {
    return (
        <div id="intro" className="intro">
          <h1
              className="intro__asterisk"
              onClick={this.handleAsteriskClick}>*</h1>
          <p className="intro__motto">
            <sup>*</sup>
            {this.props.motto}
          </p>
        </div>
    )
  }
}

export default Intro;
