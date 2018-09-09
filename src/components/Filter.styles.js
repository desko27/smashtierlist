import styled from 'styled-components';

import { theme } from './layout/Header.styles';

const { height } = theme;
const color = '#e0dddd';

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;

  :before {
    content: '';
    border-right: ${height}px solid ${color};
    border-top: ${height}px solid transparent;
  }
`;

export const Input = styled.input`
  height: ${height}px;

  display: block;
  border: none;
  width: 100%;
  max-width: 260px;
  background: ${color};
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  padding-left: 8px;

  font-size: 1em;
  font-weight: 300;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #9b9b9b;
  }
`;
