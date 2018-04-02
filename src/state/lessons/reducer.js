/**
 * External dependencies
 */
import { combineReducers } from 'redux';
/**
 * Internal dependencies
 */
import {
  LESSONS_RECEIVE,
  LESSONS_REQUEST,
  LESSONS_REQUEST_FAILURE,
  LESSONS_REQUEST_SUCCESS,
  LESSON_RECEIVE
} from '../action-types';

/**
 * Tracks all known course objects
 *
 * @param  {Object} state  Current state
 * @param  {Object} action Action payload
 * @return {Object}        Updated state
 */
export const items = (state = [], action) => {
  switch (action.type) {
  case LESSONS_RECEIVE:
    return action.lessons;
  }

  return state;
};

export const item = (state = {}, action) => {
  switch (action.type) {
  case LESSON_RECEIVE:
    return {
      id: action.lessonId
    };
  }
  return state;
};

/**
 * Returns the updated post query requesting state after an action has been
 * dispatched. The state reflects a mapping of serialized query to whether a
 * network request is in-progress for that query.
 *
 * @param  {Object} state  Current state
 * @param  {Object} action Action payload
 * @return {Object}        Updated state
 */
export function queryRequests(state = {}, action) {
  switch (action.type) {
  case LESSONS_REQUEST:
  case LESSONS_REQUEST_SUCCESS:
  case LESSONS_REQUEST_FAILURE:
    return Object.assign({}, state, {
      [action.query]: LESSONS_REQUEST === action.type
    });
  }

  return state;
}

export default combineReducers({
  item,
  items,
  queryRequests
});
