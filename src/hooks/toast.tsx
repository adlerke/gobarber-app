import React, { useContext, createContext, useCallback, useState } from "react";
import { uuid } from "uuidv4";
import Toast from "../components/Toast";

interface ToastContextData {
  addToast(message:Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}
export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessage, "id">) => {
      const id = uuid();

      const toast = {
        id,
        title,
        description,
        type,
      };

      setMessage((oldMessage) => [...oldMessage, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessage(oldMessage => oldMessage.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast message={message} />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider");
  }
  return context;
}

export { ToastProvider, useToast };