import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, slug, gameSlug }) => (
  <div>
    <img src={`/img/chars/${gameSlug}/${slug}.png`} alt={name} />
    <div>{name}</div>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gameSlug: PropTypes.string.isRequired,
};

export default Character;
