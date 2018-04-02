/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

/**
 * Internal dependencies
 */
import { Container, CourseItem } from './components';
import { requestLessons } from 'state/lessons/actions';

const CoursesSection = ({ courses, history, requestLessons }) => (
  <Container>
    {courses.map(course => {
      console.log(course.playlist_id);
      return (
        <CourseItem
          key={course.playlist_id}
          details={course}
          onClick={() => {
            requestLessons(course.playlist_id);
            history.push(
              `/courses/${course.title
                .split(' ')
                .join('-')
                .toLowerCase()}`
            );
          }}
        />
      );
    })}
  </Container>
);

CoursesSection.propTypes = {
  courses: PropTypes.array.isRequired
};

export default connect(
  state => ({
    courses: state.courses.items
  }),
  dispatch => {
    return bindActionCreators(
      {
        requestLessons
      },
      dispatch
    );
  }
)(withRouter(CoursesSection));
