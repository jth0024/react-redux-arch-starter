import { combineReducers } from 'redux';
import * as actionTypes from './actions';

const selectedNoteId = (state = '', action) => {
  switch (action.type) {
    case actionTypes.NOTE_SELECTED:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  selectedNoteId,
});
