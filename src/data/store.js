/*
 * data/store.js
 *
 * Redux Store
 * Applies Middleware then starts the store.
 *
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
