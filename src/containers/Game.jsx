import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { currentGameSelector } from '../redux/app/selectors';
import { visibleRosterGroupedByTierSelector, allRosterGroupedByTierSelector, noMatchSelector }
  from '../redux/game/selectors';

import Roster from '../components/Roster';
import NoMatch from '../components/NoMatch';

const Game = ({ currentGame, eyeFilter, noMatch }) => {
  if (noMatch) return <NoMatch />;

  const charactersByTier = eyeFilter
    ? allRosterGroupedByTierSelector(currentGame)
    : visibleRosterGroupedByTierSelector(currentGame);

  return (
    <div itemScope itemType="http://schema.org/VideoGame">
      <Roster
        gameSlug={currentGame.slug}
        charactersByTier={charactersByTier}
      />
      <meta itemProp="name" content={currentGame.name} />
      <meta itemProp="gamePlatform" content={currentGame.console} />
    </div>
  );
};

Game.propTypes = {
  currentGame: PropTypes.object.isRequired,
  eyeFilter: PropTypes.bool.isRequired,
  noMatch: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    currentGame: currentGameSelector(state),
    eyeFilter: state.eyeFilter,
    noMatch: noMatchSelector(currentGameSelector(state)),
  }),
)(Game);
