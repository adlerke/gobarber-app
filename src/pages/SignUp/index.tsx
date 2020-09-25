import React, { useCallback, useRef } from "react";

import { FormHandles } from "@unform/core";

import { Container, Content, Background } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { Form } from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";

import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErrors";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    console.log(data);

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um E-mail válido"),
        password: Yup.string().min(6, 'Senha deve ter mínimo de 6 caracteres'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
      console.log(error);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <Input
              autoComplete="new-password"
              name="name"
              icon={FiUser}
              placeholder="Nome"
            />
            <Input
              autoComplete="new-password"
              name="email"
              icon={FiMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <a href="criar">
            <FiArrowLeft />
            Voltar para o Login
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
