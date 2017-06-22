import * as actionTypes from '../constants/actionTypes';

export const updateTime = (timeLeft) => {
  return {
    type: actionTypes.UPDATE_TIME,
    payload: timeLeft
  }
};