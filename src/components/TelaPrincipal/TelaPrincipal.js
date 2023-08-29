import { Div, Titulo } from "./styled";

function TelaPrincipal({ alterarTela }) {
  const deslogar = () => {
    // validação de logout ainda será visto mais pra frente no curso

    // ao clicar em deslogar, o usuário retorna à tela de login
    alterarTela("login");
  };

  return (
    <Div>
      <Titulo>Tela Principal</Titulo>
      <p>Boas-vindas à aplicação!</p>
      <button onClick={deslogar}>Deslogar</button>
    </Div>
  );
}

export default TelaPrincipal;
