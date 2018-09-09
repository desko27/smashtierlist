import styled from 'styled-components';

import { theme } from './layout/Header.styles';

const { height } = theme;

export const Wrapper = styled.a`
  & + & {
    margin-left: 25px;
  }

  /* fix height */
  font-size: 0;

  img {
    height: ${height};
  }
`;
