import React, { Component } from 'react';

import Notice from '../components/Notice';

import { Wrapper } from './Notices.styles';

// eslint-disable-next-line
class Notices extends Component {
  render() {
    return (
      <Wrapper>
        <Notice>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod <a href="https://twitter/desko27">@tempor</a> incididunt
            ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim <a href="https://twitter/desko27">ad minim</a> veniam,
            quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Notice>
      </Wrapper>
    );
  }
}

export default Notices;
