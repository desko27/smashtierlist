import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from 'react-tippy';
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
        id="filter-box"
        autoComplete="off"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search characters..."
      />
      <IconButtons>
        <Tooltip
          distance={15}
          position="bottom"
          hideOnClick={false}
          title={
            eye
              ? 'Highlighting results'
              : 'Filtering out results'
          }
        >
          <FontAwesomeIcon
            className="icon"
            icon={eye ? faEye : faEyeSlash}
            onClick={onEyeClick}
          />
        </Tooltip>
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
