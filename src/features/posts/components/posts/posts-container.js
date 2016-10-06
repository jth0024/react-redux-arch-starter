import { connect } from 'react-redux';
import { Posts } from './posts';
import data from '../../../data';
import * as selectors from '../../selectors';

export const PostsContainer = connect(state => ({
  isLoading: selectors.getIsLoading(state),
  posts: data.selectors.getPosts(state),
}), {
  onFetch: data.actions.postsRequested,
})(Posts);
