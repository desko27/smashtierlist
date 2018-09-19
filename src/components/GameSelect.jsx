import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';

import {
  Wrapper,
  InnerWrapper,
  Arrow,
  GameTitle,
} from './GameSelect.styles';

const GameSelect = ({ currentGame, prevGame, nextGame }) => (
  <Wrapper>
    <InnerWrapper>
      <Link to={`/${prevGame.route}`} title={prevGame.name}>
        <Arrow type="button">
          <img src="/svg/arrow-left.svg" alt="Previous game" />
        </Arrow>
      </Link>
      <GameTitle>{currentGame.shortName}</GameTitle>
      <Link to={`/${nextGame.route}`} title={nextGame.name}>
        <Arrow type="button">
          <img src="/svg/arrow-right.svg" alt="Next game" />
        </Arrow>
      </Link>
    </InnerWrapper>
  </Wrapper>
);

GameSelect.propTypes = {
  currentGame: PropTypes.object.isRequired,
  prevGame: PropTypes.object.isRequired,
  nextGame: PropTypes.object.isRequired,
};

export default GameSelect;
