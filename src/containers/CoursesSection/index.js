/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { Container, CourseItem } from './components';

const CoursesSection = ({ courses }) => (
  <Container>
    {courses.map((course) => {
      return (
        <CourseItem details={course} />
      )
    })}
  </Container>
)

export default connect((state) => ({
  courses: state.courses.items
}))(CoursesSection);