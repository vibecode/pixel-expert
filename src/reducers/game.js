import * as actionTypes from '../constants/actionTypes';
import { ResultType } from '../constants/questTypes';
import extraType from '../constants/extraTypes';
import config from '../constants/config';

const INITIAL_STATE = {
  currentQuestIdx: 0,
  timeTotal: config.TIME_TOTAL,
  timeLeft: config.TIME_TOTAL,
  livesTotal: config.LIVES_TOTAL,
  livesLeft: config.LIVES_TOTAL,
  correctPoints: 0,
  totalFinalPoints: 0,
  results: [
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
  ],
  extra: [
    {
      title: extraType.FAST,
      icon: 'fast',
      total: 0,
      value: 0,
    },
    {
      title: extraType.SLOW,
      icon: 'slow',
      total: 0,
      value: 0,
    },
    {
      title: extraType.LIVES,
      icon: 'heart',
      total: config.LIVES_TOTAL * config.LIVE_POINTS,
      value: config.LIVES_TOTAL,
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TIME:
      if (action.payload < 0) {
        throw new RangeError(`Time can't be negative`);
      }

      if (action.payload > state.timeTotal) {
        throw new RangeError(`Time can't be more than ${state.timeTotal}`);
      }

      return {
        ...state,
        timeLeft: action.payload
      };
    case actionTypes.NEXT_QUEST:
      return {
        ...state,
        currentQuestIdx: state.currentQuestIdx + 1
      };
    case actionTypes.WRONG_ANSWER:
      const livesLeft = state.livesLeft - 1;

      if (livesLeft < 0) {
        throw new RangeError(`Number of lives can't be negative`);
      }

      if (livesLeft > state.livesTotal) {
        throw new RangeError(`Number of lives can't be more than ${state.livesTotal}`);
      }

      return {
        ...state,
        livesLeft,
        results: state.results.map((result, idx) => {
          if (idx === state.currentQuestIdx) {
            return ResultType.WRONG
          }
          return result;
        }),
        extra: state.extra.map(extra => {
          if (extra.title === extraType.LIVES) {
            return {
              ...extra,
              value: livesLeft,
              total: livesLeft * config.LIVE_POINTS
            }
          }
          return extra;
        }),
      };
    case actionTypes.CORRECT_ANSWER:
      const timePassed = state.timeTotal - state.timeLeft;

      if (timePassed < 10) {
        return {
          ...state,
          correctPoints: state.correctPoints + config.CORRECT_POINTS,
          results: state.results.map((result, idx) => {
            if (idx === state.currentQuestIdx) {
              return ResultType.FAST
            }
            return result;
          }),
          extra: state.extra.map(extra => {
            if (extra.title === extraType.FAST) {
              return {
                ...extra,
                value: extra.value + 1,
                total: extra.total + config.FAST_POINTS
              }
            }
            return extra;
          })
        }
      } else if (timePassed > 20) {
        return {
          ...state,
          correctPoints: state.correctPoints + config.CORRECT_POINTS,
          results: state.results.map((result, idx) => {
            if (idx === state.currentQuestIdx) {
              return ResultType.SLOW
            }
            return result;
          }),
          extra: state.extra.map(extra => {
            if (extra.title === extraType.SLOW) {
              return {
                ...extra,
                value: extra.value + 1,
                total: extra.total + config.SLOW_POINTS
              }
            }
            return extra;
          })
        }
      } else {
        return {
          ...state,
          totalPoints: state.totalPoints + 100,
          results: state.results.map((result, idx) => {
            if (idx === state.currentQuestIdx) {
              return ResultType.CORRECT
            }
            return result;
          })
        }
      }
    case actionTypes.SHOW_FINAL_STATS:
      return {
        ...state
      };
    case actionTypes.START_AGAIN:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}
