import h from 'react-hyperscript';
import { shallow } from 'enzyme';
import { LoadingIndicator, PostList, Posts } from './posts';

describe('Posts Component', () => {
  it('should be defined', () => {
    const posts = shallow(h(Posts, {
      isLoading: false,
      onFetch: () => {},
      posts: [],
    }));
    expect(posts).not.toEqual(undefined);
  });

  it('should have name class', () => {
    const posts = shallow(h(Posts, {
      isLoading: false,
      onFetch: () => {},
      posts: [],
    }));
    expect(posts.hasClass('posts')).toEqual(true);
  });

  describe('LoadingIndicator', () => {
    it('should exist if props.isLoading is true', () => {
      const posts = shallow(h(Posts, {
        isLoading: true,
        onFetch: () => {},
        posts: [],
      }));
      const loadingIndicator = posts.find(LoadingIndicator);
      expect(loadingIndicator.isEmpty()).toEqual(false);
    });

    it('should not exist if props.isLoading is false', () => {
      const posts = shallow(h(Posts, {
        isLoading: false,
        onFetch: () => {},
        posts: [],
      }));
      const loadingIndicator = posts.find(LoadingIndicator);
      expect(loadingIndicator.isEmpty()).toEqual(true);
    });
  });

  describe('PostList', () => {
    it('should exist if props.isLoading is false', () => {
      const posts = shallow(h(Posts, {
        isLoading: false,
        onFetch: () => {},
        posts: [],
      }));
      const postList = posts.find(PostList);
      expect(postList.isEmpty()).toEqual(false);
    });

    it('should not exist if props.isLoading is true', () => {
      const posts = shallow(h(Posts, {
        isLoading: true,
        onFetch: () => {},
        posts: [],
      }));
      const postList = posts.find(PostList);
      expect(postList.isEmpty()).toEqual(true);
    });
  });
});
