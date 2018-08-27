import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, avatarUrl }) => (
  <div>
    <img src={avatarUrl} alt={name} />
    <div>{name}</div>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Character;
