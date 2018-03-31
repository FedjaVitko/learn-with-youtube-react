/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { VideoContainer, IFrame, VideoTitle } from './Styled';

const VideoSection = ({ videoId }) => (
  <VideoContainer>
    <IFrame
      id="ytplayer"
      type="text/html"
      width="1000"
      height="600"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&amp;showinfo=0`}
      frameBorder="0"
      allowFullScreen
    />
    <VideoTitle>Vue 2.0 Tutorial</VideoTitle>
  </VideoContainer>
);

VideoSection.propTypes = {
  videoId: PropTypes.string.isRequired
};

export default VideoSection;
