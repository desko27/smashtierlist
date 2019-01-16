import styled from 'styled-components';

import { theme } from './layout/Header.styles';

const { height } = theme;

export const Wrapper = styled.a`
  margin-left: 25px;
  cursor: pointer;

  /* fix height */
  font-size: 0;

  img {
    height: ${height}px;
  }
`;
