import { combineReducers } from 'redux';
import data from '../data';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case data.actions.POSTS_RECEIVED:
    case data.actions.POSTS_REQUEST_FAILED:
      return false;
    case data.actions.POSTS_REQUESTED:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
});
