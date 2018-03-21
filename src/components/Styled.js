import styled from 'styled-components';
import { styleConst } from 'const';

const { COLORS, FONT_SIZES } = styleConst;

const Tag = styled.span`
    position: absolute;
    color: ${COLORS.TAG_TEXT};
    background: ${COLORS.TAG_BACKGROUND};
    font-weight: 700;
    font-size: ${FONT_SIZES.XS};
    line-height: 12px;
    padding: 7px 4px;

    @media (min-width: 1024px) {
        font-size: ${FONT_SIZES.S};
        line-height: 15px;
        padding: 4px 8px;
    }
`

export {
    Tag,
}