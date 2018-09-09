import styled from 'styled-components';

export const theme = {
  height: 35,
};

export const Wrapper = styled.header`
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, .5));
  position: sticky;
  top: 0;
  padding: 30px;
  display: flex;
`;

export const InnerHeaderSecondLine = styled.div`
  flex-grow: 1;
  display: flex;
`;
