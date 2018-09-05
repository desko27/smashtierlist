import styled from 'styled-components';

export const Wrapper = styled.div`
  & + & {
    margin-top: 60px;
  }
`;

const triangleSize = 30;
const borderSize = 6;

export const Header = styled.h3`
  max-width: 400px;
  margin: 0 auto;

  font-size: 36px;
  font-weight: 700;

  padding-bottom: 3px;
  border-bottom: ${borderSize}px solid #000;

  position: relative;
  :after {
    position: absolute;
    right: -${borderSize}px;
    bottom: -${borderSize}px;
    content: '';
    border-left: ${triangleSize}px solid #000;
    border-top: ${triangleSize}px solid transparent;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
