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
          <a>
            <img src="/imagens/linkedin.png" />
          </a>
        </li>
        <li>
          <a>
            <img src="/imagens/Github.png" />
          </a>
        </li>
        <li>
          <a>
            <img src="/imagens/Whatsapp.png" />
          </a>
        </li>
      </ul>
    </StyledSection>
  );
}
export default RedesSociais;
