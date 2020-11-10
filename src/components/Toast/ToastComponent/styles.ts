import styled, { css } from "styled-components";
import { animated } from 'react-spring'

interface ContainerProps {
  type?: "success" | "error" | "info";
  hasDescription: boolean;
}
const toastTypeVariations = {
  info: css`
    background: #d1ecf1;
    color: #0c5460;
  `,
  success: css`
    background: #abe4b9;
    color: #155724;
  `,
  error: css`
    background: #fdb1b8;
    color: #721c24;
  `,
};
export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  background: #d1ecf1;
  color: #0c5460;

  & + div {
    margin-top: 8px;
  }
  ${(props) => toastTypeVariations[props.type || "info"]}

  >svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
