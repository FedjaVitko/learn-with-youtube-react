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

const PlaylistSection = ({ videos }) => (
  <PlaylistContainer>
    <Playlist>
      {videos.map(video => (
        <ListItem
          key={video.id}
          id={video.id}
          title={video.title}
          duration={video.duration}
          active={true}
        />
      ))}
    </Playlist>
  </PlaylistContainer>
);

PlaylistSection.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(video))
};

export default PlaylistSection;
