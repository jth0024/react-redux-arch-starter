import { combineReducers } from 'redux';
import data from '../features/data';
import notes from '../features/notes';
import posts from '../features/posts';

export default combineReducers({
  [data.constants.NAME]: data.reducer,
  [notes.constants.NAME]: notes.reducer,
  [posts.constants.NAME]: posts.reducer,
});
