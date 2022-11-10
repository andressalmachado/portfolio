import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f0f0f0;
  font-size: 20px;

  img {
    max-width: 30%;
    width: 200px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 50px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="/">
        <img src="/imagens/favicon.ico" />
      </a>
      <ul>
        <li>
          <a href="/">Sobre</a>
        </li>
        <li>
          <a href="/">Projetos</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
      </ul>
    </StyledMenu>
  );
}
export default Menu;
