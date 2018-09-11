import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  InnerWrapper,
  Arrow,
  GameTitle,
} from './GameSelect.styles';

const GameSelect = ({ gameTitle, onClickPrev, onClickNext }) => (
  <Wrapper>
    <InnerWrapper>
      <Arrow onClick={onClickPrev} onKeyDown={onClickPrev} type="button">
        <img src="/svg/arrow-left.svg" alt="Left" />
      </Arrow>
      <GameTitle>{gameTitle}</GameTitle>
      <Arrow onClick={onClickNext} onKeyDown={onClickNext} type="button">
        <img src="/svg/arrow-right.svg" alt="Right" />
      </Arrow>
    </InnerWrapper>
  </Wrapper>
);

GameSelect.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default GameSelect;
