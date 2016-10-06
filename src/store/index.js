import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';

const loggerMiddleware = createLogger({
  colors: {},
  collapsed: () => true,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  loggerMiddleware,
  sagaMiddleware
);

const store = createStore(reducer, middleware);

sagaMiddleware.run(saga);

export default store;
