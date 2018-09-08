import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ImgWrapper, Name } from './Character.styles';

const Character = ({ name, slug, gameSlug }) => (
  <Wrapper>
    <ImgWrapper>
      <img src={`/img/chars/${gameSlug}/${slug}.png`} alt={name} />
    </ImgWrapper>
    <Name>{name}</Name>
  </Wrapper>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gameSlug: PropTypes.string.isRequired,
};

export default Character;
