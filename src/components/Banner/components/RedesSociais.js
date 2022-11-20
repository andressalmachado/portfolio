import styled from "styled-components";

const StyledSection = styled.section`
  ul {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    cursor: pointer;

    img {
      height: 50px;
    }
  }
`;

function RedesSociais() {
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
}
export default RedesSociais;
