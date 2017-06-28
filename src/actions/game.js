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

export const showFinalStats = (state) => {
  return {
    type: actionTypes.SHOW_FINAL_STATS,
    payload: state
  }
};

export const onAnswer = (isCorrect) => (dispatch, getState) => {
  dispatch({
    type: isCorrect ? actionTypes.CORRECT_ANSWER : actionTypes.WRONG_ANSWER
  });

  const state = getState();
  const { game, quests } = state;
  const { livesLeft, currentQuestIdx } = state.game;
  const nextQuestIdx = currentQuestIdx + 1;

  if (livesLeft && quests[nextQuestIdx]) {
    const quest = quests[nextQuestIdx];

    dispatch(nextQuest(getScreenType(quest)));
  } else {
    dispatch(showFinalStats(game));
  }
};

export const startAgain = () => {
  return {
    type: actionTypes.START_AGAIN
  }
};
