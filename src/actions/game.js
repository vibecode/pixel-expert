import * as actionTypes from '../constants/actionTypes';

export const updateTime = (timeLeft) => {
  return {
    type: actionTypes.UPDATE_TIME,
    payload: timeLeft
  }
};

export const nextQuest = () => {
  return {
    type: actionTypes.NEXT_QUEST
  }
};

export const setCorrectAnswer = () => {
  return {
    type: actionTypes.SET_CORRECT_ANSWER
  }
};

export const setWrongAnswer = () => {
  return {
    type: actionTypes.SET_WRONG_ANSWER
  }
};
