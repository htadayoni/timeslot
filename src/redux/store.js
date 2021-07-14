import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
// the value from combineReducers

export const store = createStore(
  rootReducer,
  (process.env.NODE_ENV !== 'production') && applyMiddleware(logger)
);
