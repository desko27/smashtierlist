import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addGame } from '../redux/game/actions';

// eslint-disable-next-line
class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(addGame({
      name: 'Fake Smash',
      roster: [
        { name: 'Sonic', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Shadow', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Mario', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Fox', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Luigi', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Lucario', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Zelda', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Link', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Falco', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Olimar', tier: 'C', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Ike', tier: 'D', avatarUrl: 'https://via.placeholder.com/50x50' },
      ],
    }));
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
