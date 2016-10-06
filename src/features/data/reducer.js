import { combineReducers } from 'redux';
import * as actionTypes from './actions';

const posts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.POSTS_RECEIVED:
      return action.posts;
    case actionTypes.POSTS_REQUEST_FAILED:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  posts,
});
