import styled from 'styled-components';

import media from '../../media';

export const theme = {
  height: 35,
};

const layer = 10;
const shadowFilter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, .5));';

export const Wrapper = styled.header`
  z-index: ${layer};
  filter: ${shadowFilter};
  position: sticky;
  top: 0;
  padding: 30px;
  display: flex;

  ${media.lessThan('mobile')`
    position: static;
    flex-wrap: wrap;
    padding-bottom: 0;
  `}
`;

export const InnerHeaderSecondLine = styled.div`
  flex-grow: 1;
  display: flex;

  ${media.lessThan('mobile')`
    display: none;
  `}
`;

export const OuterHeaderSecondLine = styled.div`
  z-index: ${layer};
  filter: ${shadowFilter};
  position: sticky;
  top: 0;
  padding: 20px 30px;
  margin: 10px 0;
  display: flex;

  ${media.greaterThan('mobile')`
    display: none;
  `}

  transition: all .2s ease-out;

  &.stuck {
    background: #000;
  }
`;
