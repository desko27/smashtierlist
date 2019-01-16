import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './HeaderIcon.styles';

const HeaderIcon = ({
  url,
  svgPath,
  svgPathActive,
  alt,
  active,
  onClick,
}) => (
  <Wrapper
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={alt}
    active={active}
    onClick={onClick}
  >
    <img src={(active && svgPathActive) || svgPath} alt={alt} />
  </Wrapper>
);

HeaderIcon.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  svgPath: PropTypes.string.isRequired,
  svgPathActive: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

HeaderIcon.defaultProps = {
  url: null,
  alt: null,
  active: false,
  svgPathActive: null,
  onClick: () => {},
};

export default HeaderIcon;
