import { NAME } from './constants';

export const POSTS_RECEIVED = `${NAME}/POSTS_RECEIVED`;
export const POSTS_REQUESTED = `${NAME}/POSTS_REQUESTED`;
export const POSTS_REQUEST_FAILED = `${NAME}/POSTS_REQUEST_FAILED`;

export const postsReceived = posts => ({
  type: POSTS_RECEIVED,
  posts,
});

export const postsRequested = () => ({
  type: POSTS_REQUESTED,
});

export const postsRequestFailed = () => ({
  type: POSTS_REQUEST_FAILED,
});
