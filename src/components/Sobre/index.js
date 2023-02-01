import styled from "styled-components";
import Botao from "../Botao";
import config from "/config.json";

const StyledSobre = styled.section`
  max-width: 100%;
  padding: 40px;
  margin-top: 100px;

  display: flex;
  align-items: center;
  gap: 40px;

  background-color: rgba(105, 92, 133, 0.3);

  img {
    height: 400px;
    border-radius: 200px;
  }

  .detalhes {
    p {
      padding: 40px;
      line-height: 40px;
      font-size: 20px;
      text-align: justify;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 480px) {
    p {
      font-size: 16px;
    }
  }
`;
const Sobre = () => {
  return (
    <StyledSobre>
      <img src="https://github.com/andressalmachado.png" />
      <div className="detalhes">
        <p>{config.about}</p>
        <Botao>Baixar currículo (PT)</Botao>
      </div>
    </StyledSobre>
  );
};

export default Sobre;
