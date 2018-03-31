/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { video } from 'const/propTypes';
import { VideoContainer, IFrame, VideoTitle } from './Styled';

const PlaylistSection = ({ videos }) => (
  <VideoContainer>
    <VideoTitle>Vue 2.0 Tutorial</VideoTitle>
  </VideoContainer>
);

PlaylistSection.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(video))
};

export default PlaylistSection;
