import styled from "styled-components";

const StyledDiv = styled.section`
  ul {
    margin: 0 auto;
    display: flex;
    width: 80vw;

    justify-content: center;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    ::-webkit-scrollbar {
      background-color: #fdfdfd;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #fdfdfd;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track-piece {
      background: #fdfdfd;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(105, 92, 133, 0.3);
      border-radius: 10px;
    }

    li {
      flex: none;
      scroll-snap-align: start;

      img {
        height: 100px;
        margin: 15px 30px;
        border-radius: 24px;
        box-shadow: 3px 8px 19px -13px rgba(0, 0, 0, 0.75);
      }
    }
  }
  @media (max-width: 480px) {
    ul {
      li {
        img {
          height: 80px;
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
