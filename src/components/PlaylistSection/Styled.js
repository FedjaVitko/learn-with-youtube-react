/**
 * External dependencies
 */
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { styleConst } from 'const';
import { Block } from 'components/Styled';

const PlaylistContainer = Block.extend``;

const Playlist = styled.ul`
  column-count: 2;
  column-gap: 30px;
`;

export { PlaylistContainer, Playlist };
