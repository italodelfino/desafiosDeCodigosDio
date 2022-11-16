import Input from "../../components/Input";
import {Main, Container, Content, FormContent, Form, Button, P, Label, } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Cadastro() {
  return (
    <Main>
      <Container>
        <Content>
          <h3>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </h3>
        </Content>
        <FormContent>
          <hr />
          <h3>Comece agora grátis</h3>
          <p>Crie sua conta e make the change...</p>
          <Form>
            <Label>
              <FontAwesomeIcon icon={faUser} />
              <Input PlaceHolder="Nome Completo" />
            </Label>
            <Label>
              <FontAwesomeIcon icon={faEnvelope} color="blue" />
              <Input PlaceHolder="E-mail" />
            </Label>
            <Label>
              <FontAwesomeIcon icon={faLock} />
              <Input PlaceHolder="Password" />
            </Label>
            <Button>Criar minha conta</Button>
          </Form>
          <p>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </p>
          <P>
            Já tenho conta. <a href="@">Fazer login</a>
          </P>
        </FormContent>
      </Container>
    </Main>
  );
}
