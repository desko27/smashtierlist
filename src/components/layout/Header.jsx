import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './common.styles';
import { HeaderWrapper } from './Header.styles';

const Header = ({ children }) => (
  <HeaderWrapper>
    <Container>
      {children}
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
