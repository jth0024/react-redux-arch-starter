import h from 'react-hyperscript';
import { shallow } from 'enzyme';
import { Post } from './post';

describe('Post Component', () => {
  it('should be defined', () => {
    const post = shallow(h(Post, {
      post: {
        id: 0,
        body: 'Some Text',
        title: 'My Post',
      },
    }));
    expect(post).not.toEqual(undefined);
  });

  it('should have name class', () => {
    const post = shallow(h(Post, {
      post: {
        id: 0,
        body: 'Some Text',
        title: 'My Post',
      },
    }));
    expect(post.hasClass('post')).toEqual(true);
  });
});
