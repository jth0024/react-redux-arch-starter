import _ from 'lodash';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import shared from '../shared';
import * as actions from './actions';
import * as helpers from './helpers';

const simulateDelay = () => new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

const simulateErrorChance = () => new Promise((resolve) => {
  const shouldFail = _.random(1, 3) === 3;

  if (shouldFail) {
    resolve('Error simulated!');
  } else {
    resolve();
  }
});

function* fetchPosts() {
  const randomUserId = _.random(1, 10);

  const posts = yield call(helpers.fetchPosts, randomUserId);

  const error = yield call(simulateErrorChance);

  yield call(simulateDelay);

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    yield put(actions.postsRequestFailed());
  } else {
    yield put(actions.postsReceived(posts));
  }
}

function* initialize() {
  const posts = yield call(helpers.fetchPosts, 1);
  yield put(actions.postsReceived(posts));
}

export default function* saga() {
  yield [
    takeEvery(actions.POSTS_REQUESTED, fetchPosts),
    takeEvery(shared.actions.INITIALIZED, initialize),
  ];
}
