import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input } from './Filter.styles';

const Filter = ({ onChange }) => (
  <Wrapper>
    <Input type="text" onChange={onChange} placeholder="Filter characters..." />
  </Wrapper>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
