import styled from 'styled-components';

import media from 'common/media';

export const Wrapper = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #9b9b9b;
  font-size: 70px;
  font-weight: 300;

  ${media.lessThan('mobile')`
    font-size: 40px;
  `}
`;

export const EmojiWrapper = styled.span`
  margin-left: 20px;

  ${media.lessThan('mobile')`
    margin-left: 12px;
  `}
`;
