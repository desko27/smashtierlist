import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, CloseButton } from './Notice.styles';

const Notice = ({ children }) => (
  <Wrapper>
    <CloseButton />
    <div className="notice-contents">
      {children}
    </div>
  </Wrapper>
);

Notice.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Notice;
