import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton
} from "./styled";

function TelaLogin({ alterarTela }) {
  return (
    <FormContainer>
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel>
          E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Senha:
          <Input type={"password"} />
        </StyledLabel>
        <SendButton
          onClick={() => {
            alterarTela("principal");
          }}
        >
          Entrar
        </SendButton>
        <RegisterButton
          onClick={() => {
            alterarTela("cadastro");
          }}
        >
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
