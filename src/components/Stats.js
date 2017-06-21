import React from 'react';
import '../styles/stats.css';

export default (props) => {
  return (
      <div className="stats">
        <ul className="stats">
          {props.stats.map(result => <li className={`stats__result stats__result--${result}`} />)}
        </ul>
      </div>
  )
}
