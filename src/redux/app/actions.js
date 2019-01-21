import {
  SELECT_GAME,
  PREV_GAME,
  NEXT_GAME,
  SET_EYE_FILTER,
} from './action-types';

export const selectGame = (key, value) => ({ type: SELECT_GAME, key, value });
export const prevGame = () => ({ type: PREV_GAME });
export const nextGame = () => ({ type: NEXT_GAME });
export const setEyeFilter = value => ({ type: SET_EYE_FILTER, value });
