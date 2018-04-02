/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { video } from 'const/propTypes';
import { PlaylistContainer, Playlist } from './Styled';
import { ListItem } from './components';

const PlaylistSection = ({ videos, videoId, onItemClick }) => (
  <PlaylistContainer>
    <Playlist>
      {videos.map(video => (
        <ListItem
          key={video.id}
          id={video.id}
          title={video.info.title}
          duration={video.info.duration}
          active={video.id === videoId}
          onClick={() => onItemClick(video.id)}
        />
      ))}
    </Playlist>
  </PlaylistContainer>
);

PlaylistSection.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(video)).isRequired,
  videoId: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default PlaylistSection;
