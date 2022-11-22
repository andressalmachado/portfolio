import styled from "styled-components";
import config from "/config.json";

const StyledDiv = styled.section`
  padding: 0px 50px;
  margin: 40px 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
      cursor: pointer;
    }

    img {
      height: 50px;
      margin: 15px;
      border-radius: 4px;
    }
  }
`;

function Conhecimento() {
  return (
    <StyledDiv>
      <ul>
        <li>
          <a title="ReactJS">
            <img src={config.imagens.react} />
          </a>
        </li>
        <li>
          <a title="Next">
            <img src={config.imagens.next} />
          </a>
        </li>
        <li>
          <a title="CSS">
            <img src={config.imagens.css} />
          </a>
        </li>
        <li>
          <a title="html">
            <img src={config.imagens.html} />
          </a>
        </li>
        <li>
          <a title="Javascript">
            <img src={config.imagens.javascript} />
          </a>
        </li>
        <li>
          <a title="Sass">
            <img src={config.imagens.sass} />
          </a>
        </li>
        <li>
          <a title="Git">
            <img src={config.imagens.git} />
          </a>
        </li>
        <li>
          <a title="Github">
            <img src={config.imagens.github} />
          </a>
        </li>
        <li>
          <a title="Styled-components">
            <img src={config.imagens.styled_components} />
          </a>
        </li>
        <li>
          <a title="Ajax">
            <img src={config.imagens.ajax} />
          </a>
        </li>
        <li>
          <a title="MongoDB">
            <img src={config.imagens.mongodb} />
          </a>
        </li>
        <li>
          <a>
            <img src={config.imagens.supabase} />
          </a>
        </li>
        <li>
          <a title="Kanban">
            <img src={config.imagens.kanban} />
          </a>
        </li>
        <li>
          <a title="Scrum">
            <img src={config.imagens.scrum} />
          </a>
        </li>
      </ul>
    </StyledDiv>
  );
}

export default Conhecimento;
