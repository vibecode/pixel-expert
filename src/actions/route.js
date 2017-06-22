import { CHANGE_SCREEN } from '../constants/actionTypes';

export const changeScreen = screenType => {
  return {
    type: CHANGE_SCREEN,
    payload: screenType
  }
};
