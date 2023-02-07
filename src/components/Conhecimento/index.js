import styled from "styled-components";

const StyledDiv = styled.section`
  ul {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      img {
        height: 75px;
        margin: 15px 30px;
        border-radius: 24px;
        box-shadow: 3px 8px 19px -13px rgba(0, 0, 0, 0.75);
      }
    }
  }

  @media (max-width: 1024px) {
    ul {
      li {
        img {
          height: 65px;
        }
      }
    }
  }
  @media (max-width: 480px) {
    ul {
      li {
        img {
          height: 50px;
        }
      }
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
