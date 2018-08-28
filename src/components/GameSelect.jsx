import React from 'react';
import PropTypes from 'prop-types';

const GameSelect = ({ currentGameId, onClickPrev, onClickNext }) => (
  <div>
    <div>Super Smash Bros.</div>
    <div>
      <button onClick={onClickPrev} onKeyDown={onClickPrev} type="button">prev</button>
      <div>{currentGameId}</div>
      <button onClick={onClickNext} onKeyDown={onClickNext} type="button">next</button>
    </div>
  </div>
);

GameSelect.propTypes = {
  currentGameId: PropTypes.string.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default GameSelect;
