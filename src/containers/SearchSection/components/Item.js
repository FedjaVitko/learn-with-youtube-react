import styled, { css } from 'styled-components';

const Item = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  background-color: white;
  border: none;
  height: auto;
  text-align: left;
  border-top: none;
  line-height: 1em;
  color: rgba(0,0,0,.87);
  font-size: 2rem;
  text-transform: none;
  font-weight: 400;
  box-shadow: none;
  padding: .8rem 1.1rem;
  white-space: normal;
  word-wrap: normal;

  ${props => props.isActive && css`
    color: white;
    background: rgba(0,0,0,.03);
  `}
  ${props => props.isSelected && css`
    color: rgba(0,0,0,.95);
    font-weight: 700;
  `}
  ${props => props.isSelected && props.isActive && css`
    color: white;
  `}
`;

export default Item;