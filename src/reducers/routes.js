import {
  CHANGE_SCREEN,
  START_AGAIN,
  SHOW_FINAL_STATS,
  NEXT_QUEST
} from '../constants/actionTypes';
import * as screenTypes from '../constants/screenTypes';

const INITIAL_STATE = {
  path: screenTypes.INTRO
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        path: action.payload
      };
    case START_AGAIN:
      return {
        ...state,
        path: screenTypes.GREETING
      };
    case NEXT_QUEST:
      return {
        ...state,
        path: action.payload
      };
    case SHOW_FINAL_STATS:
      return {
        ...state,
        path: screenTypes.FINAL_STATS
      };
    default:
      return state;
  }
}
