import React from 'react';
import h from 'react-hyperscript';
import data from '../../../data';
import * as helpers from '../../helpers';
import './post.scss';

export const Post = React.createClass({
  displayName: 'Post',
  propTypes: {
    post: React.PropTypes.shape(data.models.postShape).isRequired,
  },
  render() {
    const truncatedBody = helpers.truncatePostBody(this.props.post.body);
    return h('.post', [
      h('.post__text', [
        `${this.props.post.id}: ${truncatedBody}`,
      ]),
    ]);
  },
});
