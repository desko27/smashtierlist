import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line
class App extends React.Component {
  render() {
    // eslint-disable-next-line
    const { dispatch, state } = this.props;
    return (
      <div className="App">
        <h1>{state.title}</h1>
      </div>
    );
  }
}

export default connect(
  state => ({ state }),
)(App);
