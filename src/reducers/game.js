import * as actionTypes from '../constants/actionTypes';
import { ResultType } from '../constants/questTypes';

const INITIAL_STATE = {
  currentQuest: 0,
  timeTotal: 30,
  timeLeft: 30,
  livesTotal: 3,
  livesLeft: 3,
  totalPoints: 0,
  stats: [
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TIME:
      return {
        ...state,
        timeLeft: action.payload
      };
    case actionTypes.NEXT_QUEST:
      return {
        ...state,
        currentQuest: state.currentQuest + 1
      };
    case actionTypes.SET_WRONG_ANSWER:
      return {
        ...state,
        livesLeft: state.livesLeft - 1,
        stats: state.stats.map((result, idx) => {
          if (idx === state.currentQuest) {
            return ResultType.WRONG
          }
          return result;
        })
      };
      //TODO: MOVE POINTS CONSTANTS TO CONFIG;
    case actionTypes.SET_CORRECT_ANSWER:
      const timePassed = state.timeTotal - state.timeLeft;

      if (timePassed < 10) {
        return {
          ...state,
          totalPoints: state.totalPoints + 150,
          stats: state.stats.map((result, idx) => {
            if (idx === state.currentQuest) {
              return ResultType.FAST
            }
            return result;
          })
        }
      } else if (timePassed > 20) {
        return {
          ...state,
          totalPoints: state.totalPoints + 50,
          stats: state.stats.map((result, idx) => {
            if (idx === state.currentQuest) {
              return ResultType.SLOW
            }
            return result;
          })
        }
      } else {
        return {
          ...state,
          totalPoints: state.totalPoints + 100,
          stats: state.stats.map((result, idx) => {
            if (idx === state.currentQuest) {
              return ResultType.CORRECT
            }
            return result;
          })
        }
      }
    default:
      return state;
  }
}
