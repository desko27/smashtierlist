import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './common.styles';
import { MainWrapper } from './Main.styles';

const Main = ({ children }) => (
  <MainWrapper>
    <Container>
      {children}
    </Container>
  </MainWrapper>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
