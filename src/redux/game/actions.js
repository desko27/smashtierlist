import { ADD_GAME, FILTER_BY_NAME } from './action-types';

export const addGame = game => ({ type: ADD_GAME, game });
export const filterByName = search => ({ type: FILTER_BY_NAME, search });
