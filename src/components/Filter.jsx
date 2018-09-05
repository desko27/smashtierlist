import React from 'react';
import PropTypes from 'prop-types';

import { FilterWrapper, Input } from './Filter.styles';

const Filter = ({ onChange, value }) => (
  <FilterWrapper>
    <Input type="text" onChange={onChange} value={value} placeholder="Filter..." />
  </FilterWrapper>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
