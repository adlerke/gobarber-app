import React, { useRef, useCallback } from "react";
import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErrors";
import { Link } from "react-router-dom";

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signIn } = useAuth();
  const { addToast } = useToast();

  console.log(user);

  const handleSubmit = useCallback(
    async (data: SignInData) => {
      console.log(data);

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um E-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
        addToast({
          type: "success",
          title: "Autenticado",
          description: "Autenticação realizada com sucesso",
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Erro na autenticação, cheque as credenciais",
        });
      }
    },
    [signIn, addToast]
  );
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Login </h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>
          <Link to="/sign-up">
            <FiLogIn />
            Criar conta
          </Link>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
