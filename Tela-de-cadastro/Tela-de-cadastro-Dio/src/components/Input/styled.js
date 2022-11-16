import styled from "styled-components";

export const InputForm = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #3b3450;
  margin-bottom: 1rem;

  :focus {
    outline: none;
  }

  @media screen and (min-width: 1024px) {
    max-width: 73%;
  }
`;
