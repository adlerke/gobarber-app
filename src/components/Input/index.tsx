import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInpuFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const handleInpuBlur = useCallback(() => {
    setFocused(false);

    setFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <Container isErrored={!!error} isFilled={filled} isFocused={focused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInpuFocus}
        onBlur={handleInpuBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c33030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
