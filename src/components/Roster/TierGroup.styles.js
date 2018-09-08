import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 -10px; /* character's lateral margin correction */

  background: rgba(0, 0, 0, 0.03);
  padding: 20px;
  border-radius: 25px;

  & + & {
    margin-top: 40px;
  }
`;

const triangleSize = 20;
const borderSize = 4;

export const Header = styled.h3`
  max-width: 150px;
  margin: 0 auto;
  margin-bottom: 20px;

  font-family: 'Ubuntu', sans-serif;
  font-weight: 400 !important;
  font-size: 1.8em;
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
