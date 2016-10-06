import React from 'react';
import h from 'react-hyperscript';
import './topbar.scss';

export const Topbar = React.createClass({
  displayName: 'Topbar',
  propTypes: {
    text: React.PropTypes.string,
  },
  render() {
    return h('.topbar', [
      h('.topbar__text', [
        this.props.text,
      ]),
    ]);
  },
});
