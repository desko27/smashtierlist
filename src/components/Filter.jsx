import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import {
  Wrapper,
  InputWrapper,
  IconButtons,
  Input,
} from './Filter.styles';

const Filter = ({ onChange }) => (
  <Wrapper>
    <InputWrapper>
      <Input type="text" onChange={onChange} placeholder="Filter characters..." />
      <IconButtons>
        <FontAwesomeIcon className="icon" icon={faEyeSlash} />
      </IconButtons>
    </InputWrapper>
  </Wrapper>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
