import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';

import Character from './Character';

import { Wrapper, Header, Main } from './TierGroup.styles';

const PoseItem = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const TierGroup = ({ gameSlug, tier, characters }) => (
  <Wrapper>
    <Header color={tier.color}>
      {tier.name}
    </Header>
    <Main>
      <PoseGroup>
        {characters.map(c => (
          <PoseItem key={c.id}>
            <Character gameSlug={gameSlug} {...c} />
          </PoseItem>
        ))}
      </PoseGroup>
    </Main>
  </Wrapper>
);

TierGroup.propTypes = {
  gameSlug: PropTypes.string.isRequired,
  tier: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TierGroup;
