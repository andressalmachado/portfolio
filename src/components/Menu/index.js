import styled from "styled-components";

const StyledMenu = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #b370b0;
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
    color: #222222;
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
