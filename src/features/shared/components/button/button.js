import React from 'react';
import h from 'react-hyperscript';
import './button.scss';

export const Button = React.createClass({
  displayName: 'Button',
  propTypes: {
    onPress: React.PropTypes.func,
    text: React.PropTypes.string,
  },
  render() {
    return h('.button', {
      onClick: this.props.onPress,
    }, [
      this.props.text,
    ]);
  },
});
