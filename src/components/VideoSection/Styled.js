/**
 * External dependencies
 */
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { styleConst } from 'const';

const { COLORS, FONT_SIZES } = styleConst;

const VideoContainer = styled.div`
  margin: 3rem 0;
  padding: 3rem;
  background-color: ${COLORS.BACKGROUND};
`;

const IFrame = styled.iframe`
  margin: 3rem 0;
`;

const VideoTitle = styled.h2`
  font-size: FONT_SIZES.S;
  font-weight: 400;
`;

export { VideoContainer, IFrame, VideoTitle };
