import React from "react";
import { useTransition } from "react-spring";
import { ToastMessage } from "../../hooks/toast";
import ToastComponent from "./ToastComponent";
import { Container } from "./styles";

interface ToastProps {
  message: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const messageTransitions = useTransition(message, (message) => message.id, {
    from: { right: "-100%",opacity: 0 },
    enter: { right: "0%" ,opacity: 1},
    leave: { right: "-100%" ,opacity: 0},
  });

  return (
    <Container>
      {messageTransitions.map(({item, key, props }) => (
        <ToastComponent key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default Toast;
