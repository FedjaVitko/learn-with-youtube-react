/**
 * Returns true if currently requesting posts for the posts query,
 * or false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {String}  query  Post query string
 * @return {Boolean}       Whether posts are being requested
 */
export function isRequestingCoursesForQuery(state, query) {
  return !!state.courses.queryRequests[query];
}
