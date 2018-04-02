/**
 * Internal dependencies
 */
import {
  LESSONS_RECEIVE,
  LESSONS_REQUEST,
  LESSONS_REQUEST_SUCCESS,
  LESSONS_REQUEST_FAILURE,
  LESSON_RECEIVE
} from 'state/action-types';

/**
 * Returns an action object to be used in signalling that course objects have
 * been received.
 *
 * @param  {Array}  lessons Lessons received
 * @return {Object}       Action object
 */
export function receiveLessons(lessons) {
  return {
    type: LESSONS_RECEIVE,
    lessons
  };
}

/**
 * Triggers a network request to fetch lessons for the specified course url
 *
 * @param  {String}  url   Course URL
 * @return {Function}      Action Thunk
 */
export function requestLessons(playlistId) {
  return dispatch => {
    dispatch({
      type: LESSONS_REQUEST,
      playlistId
    });

    return fetch(`/api/lessons?playlistId=${playlistId}`)
      .then(res => res.json())
      .then(lessons => {
        dispatch(receiveLessons(lessons));
        dispatch({
          type: LESSONS_REQUEST_SUCCESS,
          playlistId,
          lessons
        });
      })
      .catch(error => {
        dispatch({
          type: LESSONS_REQUEST_FAILURE,
          playlistId,
          error
        });
      });
  };
}

export function requestLesson(lessonId) {
  return {
    type: LESSON_RECEIVE,
    lessonId
  };
}
