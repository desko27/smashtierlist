import React from 'react';
import PropTypes from 'prop-types';

import { TopWrapper, Wrapper, FooterTop } from './Footer.styles';

const Footer = ({ children }) => (
  <TopWrapper>
    <FooterTop src="/svg/footer-top.svg" alt="Footer top" />
    <Wrapper>
      {children}
    </Wrapper>
  </TopWrapper>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Footer;
