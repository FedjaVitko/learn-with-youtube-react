/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { Item, Name, Duration } from './Styled';

const ListItem = ({ title, duration, active }) => (
  <Item active>
    <Name>{title}</Name>
    <Duration>{duration}</Duration>
  </Item>
);

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default ListItem;
