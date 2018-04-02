/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { video } from 'const/propTypes';
import { VideoSection, PlaylistSection } from 'components';
import { Container } from './Styled';

const CourseView = ({ videoId, videos }) => (
  <Container>
    <VideoSection videoId={videoId} />
    <PlaylistSection videos={videos} videoId={videoId} />
  </Container>
);

CourseView.propTypes = {
  videoId: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape(video))
};

export default connect(
  state =>
    console.log('state', state.courses.items) || {
      videoId: state.lessons.item && state.lessons.item.id,
      videos: state.lessons.items
    }
)(CourseView);
