import styled from "styled-components";

const StyledDiv = styled.section`
  width: 100vw;
  /* padding: 0px 50px;
  margin: 75px 0; */

  ul {
    display: flex;
    justify-content: center;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    li {
      flex: none;
      scroll-snap-align: start;
      cursor: pointer;
    }

    img {
      height: 100px;
      margin: 15px;
      border-radius: 24px;
      box-shadow: 3px 8px 19px -13px rgba(0, 0, 0, 0.75);
    }
  }
`;

const Conhecimento = () => {
  return (
    <StyledDiv>
      <ul>
        <li>
          <img src="/imagens/html.png" />
        </li>
        <li>
          <img src="/imagens/css.png" />
        </li>
        <li>
          <img src="/imagens/javascript.png" />
        </li>
        <li>
          <img src="/imagens/reactjs.png" />
        </li>
        <li>
          <img src="/imagens/nextjs.png" />
        </li>
        <li>
          <img src="/imagens/git.png" />
        </li>
        <li>
          <img src="/imagens/styled-components.png" />
        </li>
        <li>
          <img src="/imagens/sass.png" />
        </li>
      </ul>
    </StyledDiv>
  );
};

export default Conhecimento;
