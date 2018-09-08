import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Header.styles';

const Header = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
