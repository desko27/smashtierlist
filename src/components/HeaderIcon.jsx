import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from 'react-tippy';

import { Wrapper } from './HeaderIcon.styles';

const HeaderIcon = ({
  url,
  svgPath,
  svgPathActive,
  alt,
  active,
  onClick,
  tooltip,
}) => (
  <Wrapper
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={alt}
    active={active}
    onClick={onClick}
  >
    <Tooltip
      distance={15}
      position="bottom"
      title={tooltip}
    >
      <img src={active ? svgPathActive : svgPath} alt={alt} />
    </Tooltip>
  </Wrapper>
);

HeaderIcon.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  svgPath: PropTypes.string.isRequired,
  svgPathActive: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  tooltip: PropTypes.string.isRequired,
};

HeaderIcon.defaultProps = {
  url: null,
  alt: null,
  active: false,
  svgPathActive: null,
  onClick: () => {},
};

export default HeaderIcon;
