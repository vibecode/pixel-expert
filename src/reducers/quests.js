import * as actionTypes from '../constants/actionTypes';
const INITIAL_STATE =  {
  fetchSuccess: false
};

export default ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SUCCESS:
      return {
          ...state,
          fetchSuccess: true,
          ...action.payload
      };
    default:
      return state
  }
}
