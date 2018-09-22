import styled from 'styled-components';

import media from 'common/media';

export const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;

  margin-bottom: 30px;

  ${media.lessThan('mobile')`
    justify-content: space-between;
  `}
`;

export const Header = styled.h3`
  margin: 0;
  border-left: 8px solid ${props => props.color};
  padding: 0 4px;
  padding-top: 4px;
  color: ${props => props.color};

  writing-mode: vertical-lr;
  text-orientation: upright;

  font-size: 36px;
  font-weight: 900;

  margin-right: 30px;

  ${media.lessThan('mobile')`
    margin-right: 0;
  `}
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 0 -15px;
  > * { margin: 0 15px; }

  ${media.lessThan('mobile')`
    justify-content: flex-end;
  `}
`;
