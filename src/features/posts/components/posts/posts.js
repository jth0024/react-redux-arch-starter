import React from 'react';
import h from 'react-hyperscript';
import data from '../../../data';
import shared from '../../../shared';
import { Post } from '../post/post';
import './posts.scss';

const { Button } = shared.components;

export const LoadingIndicator = () => h('.posts__loading-indicator', [
  'Loading...',
]);

export const PostList = props => h('.posts__list', [
  props.posts.map(post => h(Post, {
    key: post.id,
    post,
  })),
]);

export const Posts = React.createClass({
  displayName: 'Posts',
  propTypes: {
    isLoading: React.PropTypes.bool.isRequired,
    onFetch: React.PropTypes.func.isRequired,
    posts: React.PropTypes.arrayOf(
      React.PropTypes.shape(data.models.postShape)
    ).isRequired,
  },
  render() {
    return h('.posts', [
      h('.posts__header', [
        h(Button, {
          onPress: this.props.onFetch,
          text: 'Fetch Random Posts',
        }),
      ]),
      this.props.isLoading
        ? h(LoadingIndicator)
        : h(PostList, {
          posts: this.props.posts,
        }),
    ]);
  },
});
