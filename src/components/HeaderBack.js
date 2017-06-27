import React from 'react';
import arrowLeft from '../img/arrow_left.svg';
import logo from '../img/logo_small.png';
import '../styles/header.css';

export default (props) => {
    return (
        <div className="header__back" onClick={props.startAgain}>
            <span className="back">
              <img src={arrowLeft} width="45" height="45" alt="Back" />
              <img src={logo} width="101" height="44" alt="PixelHunter" />
            </span>
        </div>
    )
}
