import styled from "styled-components";

const StyledMenu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  z-index: 1;
  background-color: #695c85;

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
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    height: 50px;

    img {
      width: 100px;
    }
    ul {
      gap: 30px;
    }
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
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
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
