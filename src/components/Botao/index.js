import styled from "styled-components";

const StyledBotao = styled.button`
  width: 340px;
  height: 80px;
  border-radius: 56px;
  font-size: 24px;
  border: 0;
  align-items: center;
  display: block;
  margin: 0 auto;
  background-color: #502955;
  color: #fff;
`;

const Botao = (props) => {
  return <StyledBotao>{props.children}</StyledBotao>;
};

export default Botao;
