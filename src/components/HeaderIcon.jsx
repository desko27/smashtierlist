import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './HeaderIcon.styles';

const HeaderIcon = ({ url, svgPath, alt }) => (
  <Wrapper href={url} target="_blank" rel="noopener noreferrer">
    <img src={svgPath} alt={alt} />
  </Wrapper>
);

HeaderIcon.propTypes = {
  url: PropTypes.string.isRequired,
  svgPath: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default HeaderIcon;
