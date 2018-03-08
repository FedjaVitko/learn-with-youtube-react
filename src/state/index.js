/**
 * External dependencies
 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

/**
 * Internal dependencies
 */
import courses from './courses/reducer';

const reducers = {
    courses,
}

export const reducer = combineReducers(reducers);

const middlewares = [
    thunkMiddleware,
]

const enhancers = [
    applyMiddleware(...middlewares),
    window.devToolsExtension && window.devToolsExtension(),
].filter(Boolean)

const initialState = {};

export default compose(...enhancers)(createStore)(reducer, initialState);