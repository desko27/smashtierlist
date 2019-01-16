import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, CloseButton } from './Notice.styles';

const Notice = ({ children, onClose, hideCloseButton }) => (
  <Wrapper>
    {!hideCloseButton && <CloseButton onClick={onClose} />}
    <div
      className="notice-contents"
      dangerouslySetInnerHTML={{ __html: children }} // eslint-disable-line
    />
  </Wrapper>
);

Notice.propTypes = {
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  hideCloseButton: PropTypes.bool,
};

Notice.defaultProps = {
  hideCloseButton: true,
};

export default Notice;
