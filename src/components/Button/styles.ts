import styled from "styled-components";

export const Container = styled.button`
  background-color: #ff9000;
  height: 56px;
  border-radius: 10px;
  color: #312e38;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 8px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;
