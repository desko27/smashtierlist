import styled from 'styled-components';

import media from '../../media';

export const TopWrapper = styled.footer`
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  padding: 60px 30px;
  background-color: #4a4a4a;
  color: #9b9b9b;

  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    margin: 0 15px;
  }

  ${media.lessThan('mobile')`
    flex-direction: column;
    padding: 25px 30px;

    > * {
      margin: 5px 0;
    }
  `}
`;

export const FooterTop = styled.img`
  display: block;
  width: 100%;
  /* strange fix: img not covering full width */
  transform: translateY(2px) scaleX(1.1);

  ${media.lessThan('mobile')`
    display: none;
  `}
`;

export const FooterSeparator = styled.div`
  height: 30px;
  width: 1px;
  background: #9b9b9b;

  ${media.lessThan('mobile')`
    display: none;
  `}
`;

export const FooterLine = styled.div`
  span {
    margin: 0 2px;
  }
  strong {
    font-weight: 500;
    color: #6d94c0;
  }
  svg {
    margin: 0 3px;
  }
`;

export const SocialIcons = styled.div`
  font-size: 1.5em;

  a {
    color: #9b9b9b;

    + a {
      margin-left: 15px;
    }
  }

  ${media.lessThan('mobile')`
    order: -1;
  `}
`;
