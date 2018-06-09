import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  label, icon, color = 'white', link = '#',
}) => (
  <a href={link}>
    <i className={`fa fa-${icon}`} style={{ color }} />
    {label}
  </a>
);

Icon.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  link: PropTypes.string,
};
Icon.defaultProps = {
  color: 'white',
  link: '#',
};
export default Icon;
