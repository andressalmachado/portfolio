import styled from "styled-components";

const StyledSection = styled.section`
  ul {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    cursor: pointer;

    img {
      transition: 0.5s;
      height: 65px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1280px) {
    ul {
      img {
        height: 50px;
      }
    }
  }
  @media (max-width: 900px) {
    ul {
      img {
        height: 40px;
      }
    }
  }
  @media (max-width: 480px) {
    ul {
      margin-top: 20px;
      justify-content: center;
    }
  }
`;

const RedesSociais = () => {
  return (
    <StyledSection>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/andressa-machado-3979b579/"
            target="_blank"
          >
            <img src="/imagens/linkedin.png" />
          </a>
        </li>
        <li>
          <a href="https://github.com/andressalmachado/" target="_blank">
            <img src="/imagens/Github.png" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5511982454222"
            target="_blank"
          >
            <img src="/imagens/Whatsapp.png" />
          </a>
        </li>
      </ul>
    </StyledSection>
  );
};
export default RedesSociais;
