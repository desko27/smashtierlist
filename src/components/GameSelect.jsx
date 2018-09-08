import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './GameSelect.styles';

const GameSelect = ({ gameTitle, onClickPrev, onClickNext }) => (
  <Wrapper>
    <button onClick={onClickPrev} onKeyDown={onClickPrev} type="button">prev</button>
    <div>{gameTitle}</div>
    <button onClick={onClickNext} onKeyDown={onClickNext} type="button">next</button>
  </Wrapper>
);

GameSelect.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default GameSelect;
