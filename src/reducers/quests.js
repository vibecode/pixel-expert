import * as actionTypes from '../constants/actionTypes';
const INITIAL_STATE =  {};

export default ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SUCCESS:
      return {
          ...state,
          ...action.payload
      };
    default:
      return state
  }
}
