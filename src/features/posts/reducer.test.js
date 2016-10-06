import reducer from './reducer';
import data from '../data';

describe('Posts Reducer', () => {
  it('should return the initial state', () => {
    const previous = undefined;
    const expected = {
      isLoading: false,
    };
    const action = {};
    const next = reducer(previous, action);
    expect(next).toEqual(expected);
  });

  it('should handle data/POSTS_RECEIVED', () => {
    const previous = {
      isLoading: true,
    };
    const expected = {
      isLoading: false,
    };
    const action = {
      type: data.actions.POSTS_RECEIVED,
      posts: [],
    };
    const next = reducer(previous, action);
    expect(next).toEqual(expected);
  });

  it('should handle data/POSTS_REQUEST_FAILED', () => {
    const previous = {
      isLoading: true,
    };
    const expected = {
      isLoading: false,
    };
    const action = {
      type: data.actions.POSTS_REQUEST_FAILED,
    };
    const next = reducer(previous, action);
    expect(next).toEqual(expected);
  });

  it('should handle data/POSTS_REQUESTED', () => {
    const previous = {
      isLoading: false,
    };
    const expected = {
      isLoading: true,
    };
    const action = {
      type: data.actions.POSTS_REQUESTED,
    };
    const next = reducer(previous, action);
    expect(next).toEqual(expected);
  });
});
