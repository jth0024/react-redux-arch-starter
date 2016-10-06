import _ from 'lodash';

export function truncatePostBody(body) {
  return _.truncate(body, {
    length: 30,
    omission: '…',
  });
}
