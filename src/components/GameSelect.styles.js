import styled from 'styled-components';

import media from 'common/media';

import { theme } from './layout/Header.styles';

const { height } = theme;
const color = '#23466f';

export const Wrapper = styled.div`
  display: flex;

  :before {
    content: '';
    border-right: ${height}px solid ${color};
    border-top: ${height}px solid transparent;
  }

  :after {
    content: '';
    border-left: ${height}px solid ${color};
    border-bottom: ${height}px solid transparent;
  }

  ${media.lessThan('mobile')`
    :after {
      display: none;
    }
  `}
`;

export const InnerWrapper = styled.div`
  height: ${height}px;
  display: flex;
  align-items: center;
  background: ${color};
  padding: 0 2px;

  ${media.lessThan('mobile')`
    padding-right: 12px;
  `}

  a {
    /* fix height */
    font-size: 0;
  }
`;

export const Arrow = styled.button`
  padding: 0;
  border: none;
  background: none;

  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const GameTitle = styled.h2`
  margin: 0 12px;
  color: #fff;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 1px;

  min-width: 70px;
  text-align: center;
`;
