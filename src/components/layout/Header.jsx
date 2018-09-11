import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Header.styles';

const Header = ({ children, className }) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Header.defaultProps = {
  className: '',
};

export default Header;
