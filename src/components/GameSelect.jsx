import React from 'react';
import PropTypes from 'prop-types';

const GameSelect = ({ gameTitle, onClickPrev, onClickNext }) => (
  <div>
    <div>Super Smash Bros.</div>
    <div>
      <button onClick={onClickPrev} onKeyDown={onClickPrev} type="button">prev</button>
      <div>{gameTitle}</div>
      <button onClick={onClickNext} onKeyDown={onClickNext} type="button">next</button>
    </div>
  </div>
);

GameSelect.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default GameSelect;
