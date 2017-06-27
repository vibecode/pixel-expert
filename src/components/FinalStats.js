import React, { Component } from 'react';
import HeaderBack from './HeaderBack';
import '../styles/result.css';

class FinalStats extends Component {
  getResultsMarkup(results) {
    return results.map((result, idx) => <li className={`stats__result stats__result--${result}`} key={idx} />)
  }

  getExtraMarkup(result) {
    return result.map(({ title, icon, total, value }) => {
      return (
          <tr key={title}>
            <td />
            <td className="result__extra">{title}:</td>
            <td className="result__extra">{value}<span className={`stats__result stats__result--${icon}`} /></td>
            <td className="result__points">× 50</td>
            <td className="result__total">{total}</td>
          </tr>
      )
    })
  }

  render() {
    const { finalStats } = this.props.state;
    const lastStats = finalStats[finalStats.length - 1];

    return (
        <div>
          <HeaderBack startAgain={this.props.startAgain} />

          <div className="result">
            <h1>{lastStats.win ? 'ПОБЕДА' : 'FAIL :('}</h1>

            {finalStats.map(({ resultNumber, win, correctPoints, totalFinalPoints, results, extra }) => {
              if (win) {
                return (
                    <table className="result__table" key={resultNumber}>
                      <tbody>
                      <tr>
                        <td className="result__number">{resultNumber}.</td>
                        <td colSpan="2">
                          <ul className="stats">
                            {this.getResultsMarkup(results)}
                          </ul>
                        </td>
                        <td className="result__points">× 100</td>
                        <td className="result__total">{correctPoints}</td>
                      </tr>
                      {this.getExtraMarkup(extra)}
                      <tr>
                        <td colSpan="5" className="result__total  result__total--final">{totalFinalPoints}</td>
                      </tr>
                      </tbody>
                    </table>
                )
              } else {
                return (
                    <table className="result__table" key={resultNumber}>
                      <tbody>
                      <tr>
                        <td className="result__number">{resultNumber}.</td>
                        <td>
                          <ul className="stats">
                            {this.getResultsMarkup(results)}
                          </ul>
                        </td>
                        <td className="result__total" />
                        <td className="result__total  result__total--final">fail</td>
                      </tr>
                      </tbody>
                    </table>
                )
              }
            })}
          </div>
        </div>
    );
  }
}

export default FinalStats;