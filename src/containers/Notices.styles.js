import styled from 'styled-components';

export const Wrapper = styled.div`
  /* this way when Notices is empty no space is occuped */
  > *:last-child {
    margin-bottom: 30px;
  }

  > * + * {
    margin-top: 30px;
  }
`;
