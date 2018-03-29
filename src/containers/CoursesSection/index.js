/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { Container, CourseItem } from './components';

const CoursesSection = ({ courses, history }) => (
  <Container>
    {courses.map(course => {
      return (
        <CourseItem
          key={course.playlist_id}
          details={course}
          onClick={() =>
            history.push(
              `/courses/${course.title
                .split(' ')
                .join('-')
                .toLowerCase()}`
            )
          }
        />
      );
    })}
  </Container>
);

export default connect(state => ({
  courses: state.courses.items
}))(withRouter(CoursesSection));
