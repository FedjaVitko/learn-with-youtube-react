/**
 * Internal dependencies
 */
import {
    COURSES_RECEIVE,
    COURSES_REQUEST,
    COURSES_REQUEST_SUCCESS,
    COURSES_REQUEST_FAILURE,
} from 'state/action-types';



/**
 * Returns an action object to be used in signalling that course objects have
 * been received.
 * 
 * @param  {Array}  posts Posts received
 * @return {Object}       Action object
 */
export function receiveCourses(courses) {
    return {
        type: COURSES_RECEIVE,
        courses,
    }
}

/**
 * Triggers a network request to fetch courses for the specified query
 * 
 * @param  {String}  query Post query
 * @return {Function}     Action Thunk
 */
export function requestCourses(query) {
    return dispatch => {
        dispatch({
            type: COURSES_REQUEST,
            query,
        });

        return fetch(`/api/courses?searchTerm=${query}`)
            .then(res => res.json())
            .then(courses => {
                dispatch(receiveCourses(courses));
                dispatch({
                    type: COURSES_REQUEST_SUCCESS,
                    query,
                    courses,
                })
            })
            .catch(error => {
                dispatch({
                    type: COURSES_REQUEST_FAILURE,
                    query,
                    error,
                });
            });
    }
}