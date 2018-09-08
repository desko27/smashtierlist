import styled from 'styled-components';

const borderSize = 4;

export const Wrapper = styled.div`
  margin: 10px;
  max-width: 150px;
  border: ${borderSize}px solid #000;
  border-radius: 15px;
`;

export const ImgWrapper = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;

const namePad = 4;

export const Name = styled.div`
  background: #000;
  padding: ${namePad}px;
  padding-top: ${namePad + borderSize}px;

  text-align: center;
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 300;
  letter-spacing: 1px;
  color: #fff;
`;
