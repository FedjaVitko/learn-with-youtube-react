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

import videos from './videos';

const CourseView = ({ videoId, videos }) => (
  <Container>
    <VideoSection videoId={videoId} />
    <PlaylistSection videos={videos} />
  </Container>
);

CourseView.propTypes = {
  videoId: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape(video))
};

export default connect(state => ({
  videoId: '5LYrN_cAJoA',
  videos: videos
}))(CourseView);
