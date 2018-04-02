import styled from 'styled-components';
import { styleConst } from 'const';

const { COLORS, FONT_SIZES } = styleConst;

const Tag = styled.span`
  position: absolute;
  color: ${COLORS.TAG_TEXT};
  background-color: ${COLORS.TAG_BACKGROUND};
  font-weight: 700;
  font-size: ${FONT_SIZES.XS};
  line-height: 12px;
  padding: 7px 4px;

  @media (min-width: 1024px) {
    font-size: ${FONT_SIZES.S};
    line-height: 15px;
    padding: 4px 8px;
  }
`;
const Block = styled.div`
  margin: 0 0 20px;
  padding: 15px;
  background-color: ${COLORS.BACKGROUND};
  height: auto;

  @media screen and (min-width: 768px) {
    padding: 15px 30px;
  }
`;

export { Tag, Block };
