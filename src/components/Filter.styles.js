import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  border: 3px solid #ccc;
  border-radius: 100px;

  padding: 15px 20px;
  font-size: 20px;
  font-weight: 300;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #ccc;
  }
`;
