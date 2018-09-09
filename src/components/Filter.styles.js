import styled from 'styled-components';

import media from '../media';
import { theme } from './layout/Header.styles';

const { height } = theme;
const backgroundColor = '#e0dddd';
const color = '#9b9b9b';

export const Wrapper = styled.div`
  flex-grow: 1;
`;

export const InputWrapper = styled.div`
  display: flex;

  max-width: 260px;
  position: relative;

  :before {
    content: '';
    border-right: ${height}px solid ${backgroundColor};
    border-top: ${height}px solid transparent;
  }

  ${media.lessThan('mobile')`
    max-width: 360px;

    :before {
      display: none;
    }
  `}
`;

export const IconButtons = styled.div`
  position: absolute;
  right: 17px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  color: ${color};
  font-size: 18px;
`;

export const Input = styled.input`
  height: ${height}px;

  display: block;
  border: none;
  width: 100%;
  background: ${backgroundColor};
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  padding-left: 8px;

  font-size: 1em;
  font-weight: 300;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${color};
  }

  ${media.lessThan('mobile')`
    border-radius: 100px;
    padding-left: 19px;
  `}
`;
