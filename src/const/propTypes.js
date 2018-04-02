import PropTypes from 'prop-types';

export const video = {
  id: PropTypes.string.isRequired,
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
  }).isRequired
};
