import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addGame } from '../redux/game/actions';
import gamesData from '../games-data';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';

import GameSelect from '../components/GameSelect';

import Game from './Game';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    // add all the games to the redux store
    gamesData.forEach(game => dispatch(addGame(game)));
  }

  render() {
    const { title, games } = this.props;
    return (
      <div>
        <Header>
          <h1>{title}</h1>
          <GameSelect />
        </Header>
        <Main>
          {games.map(game => <Game {...game} />)}
        </Main>
        <Footer>
          Made with
          <span role="img" aria-label="love">💙</span>
          by desko27
        </Footer>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  state => ({
    title: state.title,
    games: state.games,
  }),
)(App);
