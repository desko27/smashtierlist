import { SELECT_GAME, PREV_GAME, NEXT_GAME } from './action-types';

export const selectGame = (key, value) => ({ type: SELECT_GAME, key, value });
export const prevGame = () => ({ type: PREV_GAME });
export const nextGame = () => ({ type: NEXT_GAME });
