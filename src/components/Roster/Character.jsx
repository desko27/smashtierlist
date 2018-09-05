import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Character.styles';

const Character = ({ name, slug, gameSlug }) => (
  <Wrapper>
    <img src={`/img/chars/${gameSlug}/${slug}.png`} alt={name} />
    <div>{name}</div>
  </Wrapper>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gameSlug: PropTypes.string.isRequired,
};

export default Character;
