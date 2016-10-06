import { NAME } from './constants';

const get = state => state[NAME];

export const getIsLoading = state => get(state).isLoading;
