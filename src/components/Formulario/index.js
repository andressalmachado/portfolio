import styled from "styled-components";

const Styledform = styled.form`
  height: 1440px;
  background-color: rgba(105, 92, 133, 0.6);
`;

const Formulario = () => {
  return (
    <Styledform>
      <h3>Fale comigo</h3>
      <p>
        Preencha os campos abaixo com os seguintes dados que em breve entraremos
        em contato.
      </p>
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" />
    </Styledform>
  );
};

export default Formulario;
