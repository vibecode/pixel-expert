import React from 'react'
import './Stats.scss'
import v4 from 'uuid/v4'

const Stats = props => {
  return (
    <div className="stats">
      <ul className="stats">
        {props.stats.map(result => (
          <li key={v4()} className={`stats__result stats__result--${result}`} />
        ))}
      </ul>
    </div>
  )
}

export default Stats
