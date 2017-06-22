import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
  currentQuestion: 0,
  timeTotal: 30,
  timeLeft: 30,
  livesTotal: 3,
  livesLeft: 3,
  fastAnswerTime: 10,
  slowAnswerTime: 20,
  correctAnswerPoints: 100,
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
    default:
      return state;
  }
}
