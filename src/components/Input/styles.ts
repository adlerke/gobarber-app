import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  border-radius: 10px;
  color: #a1a1a1;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: color 0.2s, border-color 0.2s;
  & + div {
    margin-top: 8px;
  }
  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}
  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #ff9900;
      border-color: #ff9900;
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9900;
    `}
  input {
    background: transparent;
    border: none;
    color: #f4ede8;
    flex: 1;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
    
  }
`;
