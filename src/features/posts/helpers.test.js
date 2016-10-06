import * as helpers from './helpers';

describe('Posts Helpers', () => {
  describe('truncatePostBody', () => {
    it('should return truncated string', () => {
      const input = 'Some kind of really long string.';
      const expected = 'Some kind of really long stri…';
      const result = helpers.truncatePostBody(input);
      expect(result).toEqual(expected);
    });
  });
});
