import React from 'react';
import h from 'react-hyperscript';
import posts from '../../../posts';
import { Topbar } from '../topbar/topbar';
import './app.scss';

const { PostsContainer } = posts.components;

export const App = React.createClass({
  displayName: 'App',
  render() {
    return h('.app', [
      h(Topbar, {
        text: 'Posts',
      }),
      h('.app__content', [
        h(PostsContainer),
      ]),
    ]);
  },
});
