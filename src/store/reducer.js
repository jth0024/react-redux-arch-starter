import { combineReducers } from 'redux';
import data from '../features/data';
import posts from '../features/posts';

export default combineReducers({
  [data.constants.NAME]: data.reducer,
  [posts.constants.NAME]: posts.reducer,
});
