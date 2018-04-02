/**
 * External dependencies
 */
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { styleConst } from 'const';

const { COLORS } = styleConst;

const Item = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 6px;
  display: block;
  list-style: none;
  cursor: pointer;
  color: ${props => (props.active ? COLORS.TEXT_BRIGHT : COLORS.TEXT_DARK)};
  background-color: ${props =>
    props.active ? COLORS.PRIMARY : COLORS.SECONDARY};
`;

const Name = styled.span``;

const Duration = styled.em`
  position: absolute;
  right: 6px;
`;

export { Item, Name, Duration };
