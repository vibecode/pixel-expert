import { SHOW_FINAL_STATS } from '../constants/actionTypes'
import extraType from '../constants/extraTypes'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_FINAL_STATS: {
      return [
        ...state,
        {
          ...action.payload,
          resultNumber: state.length + 1,
          win: !!action.payload.livesLeft,
          totalFinalPoints:
            action.payload.extra.reduce((acc, extra) => {
              return extra.title === extraType.SLOW
                ? acc - extra.total
                : acc + extra.total
            }, 0) + action.payload.correctPoints
        }
      ]
    }
    default:
      return state
  }
}
