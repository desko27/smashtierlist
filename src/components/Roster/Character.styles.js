import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 89px;
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ImgWrapper = styled.div`
  z-index: 1;

  img {
    display: block;
    width: 100%;
  }
`;

const nameHeight = 16;

export const Name = styled.div`
  position: relative;

  height: ${nameHeight}px;
  background: #455059;
  padding: 0 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    /* bottom Roboto's padding fix */
    transform: translateY(1px);
  }

  &.is-large {
    font-size: 8px;
    letter-spacing: 0.5px;

    span {
      transform: scaleY(1.3);
    }
  }

  :before {
    content: '';
    position: absolute;
    bottom: ${nameHeight}px;
    left: 0;
    right: 0;

    height: 45px;
    background: ${({ color }) => color};
  }

  :after {
    content: '';
    position: absolute;
    bottom: ${nameHeight}px;
    left: 0;
    right: 0;

    height: 33px;
    width: 66px;
    margin: 0 auto;
    background: #fff;
    opacity: .2;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }
`;
