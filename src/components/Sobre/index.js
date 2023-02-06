import styled from "styled-components";
import config from "/config.json";

const StyledSobre = styled.section`
  padding: 40px 40px 60px;
  margin-top: 100px;

  display: flex;
  align-items: center;
  gap: 40px;

  background-color: rgba(105, 92, 133, 0.3);

  img {
    height: 300px;
    border-radius: 200px;
  }

  .detalhes {
    text-align: center;

    p {
      padding: 40px;
      line-height: 40px;
      font-size: 20px;
      text-align: justify;
      margin-bottom: 25px;
    }
    a {
      padding: 20px 30px;
      border-radius: 56px;
      font-size: 20px;

      background-color: #502955;
      color: #fff;
    }
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0;

    img {
      height: 200px;
    }
  }

  @media (max-width: 768px) {
    .detalhes {
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 480px) {
    .detalhes {
      p {
        font-size: 16px;
      }
    }
  }
`;
const Sobre = () => {
  return (
    <StyledSobre id="sobre">
      <img src="https://github.com/andressalmachado.png" />
      <div className="detalhes">
        <p>{config.about}</p>
        <a href="doc/Andressa Lucia Machado.pdf" target="_blank">
          Visualizar currículo (PT)
        </a>
      </div>
    </StyledSobre>
  );
};

export default Sobre;
