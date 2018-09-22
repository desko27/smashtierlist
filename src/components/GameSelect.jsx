import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';

import arrowLeftSrc from 'assets/svg/arrow-left.svg';
import arrowRightSrc from 'assets/svg/arrow-right.svg';

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
          <img src={arrowLeftSrc} alt="Previous game" />
        </Arrow>
      </Link>
      <GameTitle>{currentGame.shortName}</GameTitle>
      <Link to={`/${nextGame.route}`} title={nextGame.name}>
        <Arrow type="button">
          <img src={arrowRightSrc} alt="Next game" />
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
