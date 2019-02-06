import * as actionTypes from '../constants/actionTypes'
const INITIAL_STATE = {
  fetchSuccess: false,
  fetchError: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        fetchSuccess: true,
        ...action.payload
      }
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        fetchError: true
      }
    case actionTypes.START_AGAIN:
      return {
        ...INITIAL_STATE
      }
    default:
      return state
  }
}

export const isFetched = state => state.quests.fetchSuccess
