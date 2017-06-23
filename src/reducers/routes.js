import { CHANGE_SCREEN } from '../constants/actionTypes';
import * as screenTypes from '../constants/screenTypes';

const INITIAL_STATE = {
  path: screenTypes.INTRO
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_SCREEN:
      return {
          ...state,
          path: action.payload
      };
    default:
      return state;
  }
}
