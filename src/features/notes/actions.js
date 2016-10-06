// @flow
import { NAME } from './constants';

export const NOTE_SELECTED = `${NAME}/NOTE_SELECTED`;
export const noteSelected = id => ({
  types: NOTE_SELECTED,
  payload: id,
});
