import { render } from 'react-dom';
import { Provider } from 'react-redux';
import h from 'react-hyperscript';
import app from './features/app';
import shared from './features/shared';
import store from './store';
import './resets.scss';

const { App } = app.components;

store.dispatch(shared.actions.initialized());

render(
  h(Provider, {
    store,
  }, h(App)),
  document.querySelector('#app')
);
