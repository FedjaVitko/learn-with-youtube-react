/**
 * External dependencies
 */
import styled, { css } from 'styled-components';

/**
 * Internal dependencies
 */
import { styleConst } from 'const';

const { COLORS, FONT, FONT_SIZES } = styleConst;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 502px;
  padding: 0.4em;
  font-size: ${FONT_SIZES.XXL};
  word-wrap: break-word;
  line-height: 1em;
  outline: 0;
  white-space: normal;
  min-height: 2em;
  display: inline-block;
  ${FONT.DEFAULT};
`;

const Item = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  background-color: ${COLORS.MENU.ITEM_BACKGROUND};
  border: none;
  height: auto;
  text-align: left;
  border-top: none;
  line-height: 1em;
  color: ${COLORS.MENU.ITEM_TEXT};
  font-size: 2rem;
  text-transform: none;
  font-weight: 400;
  box-shadow: none;
  padding: .8rem 1.1rem;
  white-space: normal;
  word-wrap: normal;

  ${props =>
    props.isActive &&
    css`
      color: white;
      background: rgba(0, 0, 0, 0.03);
    `}
  ${props =>
    props.isSelected &&
    css`
      color: rgba(0, 0, 0, 0.95);
      font-weight: 700;
    `}
  ${props =>
    props.isSelected &&
    props.isActive &&
    css`
      color: white;
    `}
`;

const Menu = styled.div`
  width: 532px;
  overflow-y: auto;
  overflow-x: hidden;
  border-top-width: 0;
  outline: 0;
  border-radius: 0 0 0.28571429rem 0.28571429rem;
  transition: opacity 0.1s ease;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  border-color: #96c8da;
  border-right-width: 1;
  border-bottom-width: 1;
  border-left-width: 1;
  border-style: solid;
`;

const Section = styled.section`
  background: rgba(153, 49, 51, 0.8);
  height: calc(100vh - 30vh);
  padding-top: 30vh;
  position: relative;
`;

const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.65;
  overflow: hidden;
`;

const BgVideoContent = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TextLabel = styled.h1`
  font-size: ${FONT_SIZES.XXL};
  margin: 0 0 0.5em 0;
  color: white;
`;

export {
  Container,
  Input,
  Item,
  Menu,
  Section,
  TextLabel,
  BgVideo,
  BgVideoContent
};
