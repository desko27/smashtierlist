import styled from 'styled-components';

const imageSize = 89;
const nameHeight = 16;
const colorBoxHeight = 45;

export const Wrapper = styled.div`
  width: 89px;
  height: ${imageSize + nameHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ImgWrapper = styled.div`
  z-index: 1;
  overflow: hidden;
  position: relative; /* for LoadingBar */
  height: ${imageSize}px;

  img {
    display: block;
    width: 100%;
    transition-duration: .5s;
    transition-property: opacity, transform;
    transform-origin: 50% 100% 0;

    &.loading {
      opacity: 0;
      transform: translateY(25px);
    }

    &.loaded, &.early-loaded {
      opacity: 1;
      transform: translateY(0);
    }

    /*
    &.early-loaded {
      transition: none;
    }
    */
  }
`;

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

    height: ${colorBoxHeight}px;
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

const duration = 2000; // ms
export const LoadingBar = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;

  > div {
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 4px;

    .bar {
      content: '';
      display: inline-block;
      position: absolute;
      width: 0%;
      height: 100%;
      left: 50%;
      text-align: center;
    }
    .bar:nth-child(1) {
      background-color: #23466f;
      animation: loading ${duration}ms linear infinite;
    }
    .bar:nth-child(2) {
      background-color: #6d94c0;
      animation: loading ${duration}ms linear ${duration / 3}ms infinite;
    }
    .bar:nth-child(3) {
      background-color: #aecbec;
      animation: loading ${duration}ms linear ${2 * duration / 3}ms infinite;
    }
    @keyframes loading {
      from { left: 50%; width: 0%; z-index: 2; }
      33.3333% {left: 0; width: 100%; z-index: 1; }
      to { left: 0; width: 100%; }
    }
  }
`;
