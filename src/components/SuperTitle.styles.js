import styled from 'styled-components';

import media from '../media';
import { theme } from './layout/Header.styles';

const { height } = theme;
const color = '#b10016';

export const Wrapper = styled.div`
  display: flex;

  :after {
    content: '';
    border-left: ${height}px solid ${color};
    border-bottom: ${height}px solid transparent;
  }

  ${media.lessThan('mobile')`
    flex-grow: 1;
  `}
`;

export const InnerWrapper = styled.div`
  height: ${height}px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background: ${color};
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  padding-right: 2px;

  .title {
    margin: 0;
    font-size: 1em;
    font-weight: 900;
  }
`;

export const Logo = styled.img`
  margin-left: 4px;
  margin-right: 8px;
`;
