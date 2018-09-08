import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './common.styles';
import { FooterWrapper } from './Footer.styles';

const Footer = ({ children }) => (
  <FooterWrapper>
    <Container>
      {children}
    </Container>
  </FooterWrapper>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Footer;
