import styled from 'styled-components';

const color = '#b10016';
const height = 35;

export const Wrapper = styled.div`
  display: flex;

  :after {
    content: '';
    border-left: ${height}px solid ${color};
    border-bottom: ${height}px solid transparent;
  }
`;

export const InnerWrapper = styled.div`
  height: ${height}px;
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
    letter-spacing: 1px;
  }
`;

export const Logo = styled.img`
  margin-left: 4px;
  margin-right: 8px;
`;
