import styled, { keyframes } from "styled-components";
import back from "../../assets/sign-up-background.png";

const fadein = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;

}
`;
export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  animation: ${fadein} 0.4s linear;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
    a {
      text-decoration: none;
      color: #f4ede8;
      margin-top: 24px;
      display: block;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(80%);
      }
    }
  }

  > a {
    text-decoration: none;
    color: #f1f2f3;
    display: block;
    transition: filter 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      filter: brightness(80%);
    }
    svg {
      margin-right: 8px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${back}) no-repeat center;
  background-size: cover;
`;
