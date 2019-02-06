import * as actionTypes from '../constants/actionTypes'
import history from '../history'

export const nextQuest = screenType => {
  return {
    type: actionTypes.NEXT_QUEST,
    payload: screenType
  }
}

export const updateTime = timeLeft => {
  return {
    type: actionTypes.UPDATE_TIME,
    payload: timeLeft
  }
}

export const showFinalStats = state => {
  return {
    type: actionTypes.SHOW_FINAL_STATS,
    payload: state
  }
}

export const onAnswer = isCorrect => (dispatch, getState) => {
  dispatch({
    type: isCorrect ? actionTypes.CORRECT_ANSWER : actionTypes.WRONG_ANSWER
  })

  const state = getState()
  const { game, quests } = state
  const { livesLeft, currentQuestIdx } = state.game
  const nextQuestIdx = currentQuestIdx + 1

  if (livesLeft && quests[nextQuestIdx]) {
    const quest = quests[nextQuestIdx]

    dispatch(nextQuest(quest.type))
  } else {
    dispatch(showFinalStats(game))
    history.push('/stats')
  }
}

export const startAgain = () => {
  return {
    type: actionTypes.START_AGAIN
  }
}
