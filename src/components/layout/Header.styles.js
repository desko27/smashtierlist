import styled from 'styled-components';

import media from 'common/media';

export const theme = {
  height: 35,
};

const layer = 10;
export const shadowFilter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, .5));';

export const Wrapper = styled.header`
  z-index: ${layer};
  filter: ${shadowFilter};
  position: sticky;
  top: 0;
  padding: 30px;
  display: flex;
  transition: background-color .2s ease-out;

  &.stuck {
    background-color: #000;
  }

  ${media.lessThan('mobile')`
    position: static;
    flex-wrap: wrap;
    padding-bottom: 0;
    transition: none;

    &.stuck {
      background-color: initial;
    }
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
  display: none;

  ${media.lessThan('mobile')`
    display: flex;
  `}

  transition: background-color .2s ease-out;

  &.stuck {
    background-color: #000;
  }
`;
