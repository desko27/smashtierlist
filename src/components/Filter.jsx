import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import {
  Wrapper,
  InputWrapper,
  IconButtons,
  Input,
} from './Filter.styles';

const Filter = ({
  value,
  eye,
  onChange,
  onEyeClick,
}) => (
  <Wrapper>
    <InputWrapper>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search characters..."
      />
      <IconButtons>
        <FontAwesomeIcon
          className="icon"
          icon={eye ? faEye : faEyeSlash}
          onClick={onEyeClick}
        />
      </IconButtons>
    </InputWrapper>
  </Wrapper>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  eye: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onEyeClick: PropTypes.func.isRequired,
};

export default Filter;
