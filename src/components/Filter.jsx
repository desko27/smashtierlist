import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => (
  <div>
    <input type="text" onChange={onChange} value={value} />
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
