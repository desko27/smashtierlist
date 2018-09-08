import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-bottom: 60px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  border: 2px solid #ccc;
  border-radius: 100px;

  padding: 10px 22px;
  font-size: 1em;
  font-weight: 300;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #ccc;
  }
`;
