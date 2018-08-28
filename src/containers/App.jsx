import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import gamesData from '../games-data';
import { addGame } from '../redux/game/actions';
import { currentGameSelector } from '../redux/app/selectors';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';

import GameSelect from '../components/GameSelect';

import Game from './Game';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    // add all the games to the redux store
    gamesData.forEach((game, id) => dispatch(addGame({ id, ...game })));
  }

  render() {
    const { state } = this.props;
    const currentGame = currentGameSelector(state);

    return (
      <div>
        <Header>
          <h1>{state.title}</h1>
          <GameSelect />
        </Header>
        <Main>
          {currentGame ? <Game /> : ''}
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
  state: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  state => ({ state }),
)(App);
