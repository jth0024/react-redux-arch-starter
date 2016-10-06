import { NAME } from './constants';

const get = state => state[NAME];

export const getPosts = state => get(state).posts;
