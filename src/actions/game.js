import * as actionTypes from '../constants/actionTypes';
import { getScreenType } from '../helpers/helpers';

export const updateTime = timeLeft => {
  return {
    type: actionTypes.UPDATE_TIME,
    payload: timeLeft
  }
};

export const nextQuest = screenType => {
  return {
    type: actionTypes.NEXT_QUEST,
    payload: screenType
  }
};

export const showFinalStats = () => {
  return {
    type: actionTypes.SHOW_FINAL_STATS
  }
};

export const onAnswer = (isCorrect) => (dispatch, getState) => {
  dispatch({
    type: isCorrect ? actionTypes.CORRECT_ANSWER : actionTypes.WRONG_ANSWER
  });

  const { livesLeft, currentQuestIdx } = getState().game;
  const nextQuestIdx = currentQuestIdx + 1;
  const { quests } = getState();

  if (livesLeft && quests[nextQuestIdx]) {
    const quest = quests[nextQuestIdx];

    dispatch(nextQuest(getScreenType(quest)));
  } else {
    dispatch(showFinalStats());
  }
};

export const startAgain = () => {
  return {
    type: actionTypes.START_AGAIN
  }
};
