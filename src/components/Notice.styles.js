import styled from 'styled-components';

import { shadowFilter } from './layout/Header.styles';

export const Wrapper = styled.div`
  padding: 10px;
  background: #475058;
  filter: ${shadowFilter};

  .notice-contents {
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;

    p {
      margin: 0;

      & + p {
        margin-top: 10px;
      }
    }

    a {
      color: #f8e71c;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  float: right;

  width: 18px;
  height: 18px;
  background: #afcbec;
  opacity: 0.3;

  :hover {
    opacity: 0.5;
  }

  border: none;
  border-radius: 50%;

  padding: 0;
  margin-left: 10px;
  margin-bottom: 10px;

  :before {
    transform: translateY(1px) rotate(45deg);
    content: '';
    display: block;
    margin: 0 auto;
    border-top: 1px solid #2a2a2a;
    width: 12px;
  }

  :after {
    transform: rotate(-45deg);
    content: '';
    display: block;
    margin: 0 auto;
    border-top: 1px solid #2a2a2a;
    width: 12px;
  }
`;
