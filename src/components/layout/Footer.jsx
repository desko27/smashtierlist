import React from 'react';
import PropTypes from 'prop-types';

import { TopWrapper, Wrapper, FooterTop } from './Footer.styles';

import footerTopSrc from '../../assets/svg/footer-top.svg';

const Footer = ({ children }) => (
  <TopWrapper>
    <FooterTop src={footerTopSrc} alt="Footer top" />
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
