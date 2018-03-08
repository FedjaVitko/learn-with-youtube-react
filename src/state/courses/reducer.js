/**
 * External dependencies
 */
import {
    reduce,
} from 'lodash';
import { combineReducers } from 'redux';
/**
 * Internal dependencies
 */
import {
    COURSES_RECEIVE,
    COURSES_REQUEST,
    COURSES_REQUEST_FAILURE,
    COURSES_REQUEST_SUCCESS
} from '../action-types';

/**
 * Tracks all known course objects, indexed by course global ID
 * 
 * @param {Object} state  Current state
 * @param {Object} action Action payload
 * @param {Object}        Updated state
 */
export const items = (state = {}, action) => {
    switch (action.type) {
        case COURSES_RECEIVE:
            return reduce(
                action.courses,
                (acc, course) => {
                    const { ID: courseId, global_ID: globalId } = course;
                    if (acc[globalId]) {
                        return acc;
                    }

                    if (acc === state) {
                        acc = { ...acc };
                    }                 
                    
                    acc[globalId] = courseId;
                    return acc;
                },
                state
            );
    }
    return state;
}


// const initState = {
//     courses: [],
//     coursesCount: 0
// }

// export default (state = initState, action) => {
//     switch (action.type) {
//         case LOAD_COURSES:
//             return {
//                 ...state,
//                 courses: action.payload.courses,
//                 coursesCount: action.payload.coursesCount
//             };
//         case LOAD_COURSES_FAILURE:
//             return {

//             };
//         case LOAD_COURSES_SUCCESS:
//             return {

//             };
//         default:
//             return state;
//     }
// }

/**
 * Returns the updated post query requesting state after an action has been
 * dispatched. The state reflects a mapping of serialized query to whether a
 * network request is in-progress for that query.
 *
 * @param  {Object} state  Current state
 * @param  {Object} action Action payload
 * @return {Object}        Updated state
 */
export function queryRequests( state = {}, action ) {
	switch ( action.type ) {
		case COURSES_REQUEST:
		case COURSES_REQUEST_SUCCESS:
		case COURSES_REQUEST_FAILURE:
			return Object.assign({}, state, {
				[action.query]: COURSES_REQUEST === action.type,
			});
	}

	return state;
}

export default combineReducers({
    items,
    queryRequests
});