import React from 'react';

import { Wrapper, EmojiWrapper } from './NoMatch.styles';

const Emoji = () => (
  // eslint-disable-next-line
  <EmojiWrapper role="img" aria-label="cry">
    👀
  </EmojiWrapper>
);

const NoMatch = () => (
  <Wrapper>
    No match <Emoji />
  </Wrapper>
);

export default NoMatch;
