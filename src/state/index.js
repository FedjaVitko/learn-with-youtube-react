/**
 * External dependencies
 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

/**
 * Internal dependencies
 */
import courses from './courses/reducer';

const reducers = {
    courses,
    router: routerReducer
}

const history = createHistory();

export const reducer = combineReducers(reducers);

const routeMiddleware = routerMiddleware(history);

const middlewares = [
    thunkMiddleware,
    routeMiddleware
]

const enhancers = [
    applyMiddleware(...middlewares),
    window.devToolsExtension && window.devToolsExtension(),
].filter(Boolean)

const initialState = {};

export default compose(...enhancers)(createStore)(reducer, initialState);