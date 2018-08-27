import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addGame } from '../redux/game/actions';
import gamesData from '../games-data';

// eslint-disable-next-line
class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    // add all the games to the redux store
    gamesData.forEach(game => dispatch(addGame(game)));
  }

  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <h1>{title}</h1>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    title: state.title,
  }),
)(App);
