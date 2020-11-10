import React, { useCallback, useRef } from "react";

import { FormHandles } from "@unform/core";

import { Container, Content, Background } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { Form } from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";

import api from "../../services/api";

import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErrors";
import { Link, useHistory } from "react-router-dom";
import { useToast } from "../../hooks/toast";
interface SignUpFormData {
  name: string;
  email: string;
  passowrd: string;
}
const SignUp: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      console.log(data);

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome é obrigatório"),
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um E-mail válido"),
          password: Yup.string().min(
            6,
            "Senha deve ter mínimo de 6 caracteres"
          ),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("/users", data);
        addToast({
          type: "success",
          title: "Sucesso",
          description: "Cadastro realizado com sucesso",
        });
        history.push("/");
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: "error",
          title: "Erro",
          description:
            "Ocorreu um erro, verifique seus dados e tente novamente",
        });
      }
    },
    [addToast,history]
  );

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
          <Link to="/">
            <FiArrowLeft />
            Voltar para o Login
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
