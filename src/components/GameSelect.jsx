import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';

import {
  Wrapper,
  InnerWrapper,
  Arrow,
  GameTitle,
} from './GameSelect.styles';

const GameSelect = ({ gameTitle, prevGameRoute, nextGameRoute }) => (
  <Wrapper>
    <InnerWrapper>
      <Link to={`/${prevGameRoute}`}>
        <Arrow type="button">
          <img src="/svg/arrow-left.svg" alt="Left" />
        </Arrow>
      </Link>
      <GameTitle>{gameTitle}</GameTitle>
      <Link to={`/${nextGameRoute}`}>
        <Arrow type="button">
          <img src="/svg/arrow-right.svg" alt="Right" />
        </Arrow>
      </Link>
    </InnerWrapper>
  </Wrapper>
);

GameSelect.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  prevGameRoute: PropTypes.string.isRequired,
  nextGameRoute: PropTypes.string.isRequired,
};

export default GameSelect;
