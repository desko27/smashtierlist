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
    transition: opacity .3s;

    &.loading {
      opacity: 0;
    }

    &.loaded {
      opacity: 1;
    }
  }
`;

const nameHeight = 16;

export const Name = styled.div`
  position: relative;

  flex-basis: ${nameHeight}px;
  background: #455059;
  padding: 0 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    display: inline-block;
  }

  &.is-large {
    letter-spacing: 0.5px;
    white-space: nowrap;

    span {
      transform: scaleX(.8);
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
