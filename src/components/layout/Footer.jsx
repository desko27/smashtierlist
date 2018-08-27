import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => (
  <footer>
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Footer;
