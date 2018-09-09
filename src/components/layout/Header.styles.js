import styled from 'styled-components';

import media from '../../media';

export const theme = {
  height: 35,
};

export const Wrapper = styled.header`
  z-index: 10;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, .5));
  position: sticky;
  top: 0;
  padding: 30px;
  display: flex;

  ${media.lessThan('mobile')`
    flex-wrap: wrap;
  `}
`;

export const InnerHeaderSecondLine = styled.div`
  flex-grow: 1;
  display: flex;

  ${media.lessThan('mobile')`
    flex-basis: 100%;
    margin-top: 30px;
  `}
`;
