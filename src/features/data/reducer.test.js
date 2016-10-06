import reducer from './reducer';
import * as actionTypes from './actions';

describe('Data Reducer', () => {
  it('should return the initial state', () => {
    const previous = undefined;
    const expected = {
      posts: [],
    };
    const action = {};
    const next = reducer(previous, action);
    expect(next).toEqual(expected);
  });

  it('should handle POSTS_RECEIVED', () => {
    const previous = {
      posts: [],
    };
    const posts = [
      { id: 1, body: 'Some Text' },
    ];
    const expected = {
      posts,
    };
    const action = {
      type: actionTypes.POSTS_RECEIVED,
      posts,
    };
    const next = reducer(previous, action);
    expect(next).toEqual(expected);
  });

  it('should handle POSTS_REQUEST_FAILED', () => {
    const posts = [
      { id: 1, body: 'Some Text' },
    ];
    const previous = {
      posts,
    };
    const expected = {
      posts: [],
    };
    const action = {
      type: actionTypes.POSTS_REQUEST_FAILED,
    };
    const next = reducer(previous, action);
    expect(next).toEqual(expected);
  });
});
