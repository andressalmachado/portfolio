import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const StyledDiv = styled.section`
  padding: 0px 50px;
  margin: 75px 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
      cursor: pointer;
    }

    img {
      height: 30px;
      margin: 15px;
      border-radius: 4px;
      border: 1px solid black;
    }
  }
`;

const Conhecimento = () => {
  return (
    <StyledDiv>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
        <img src="/imagens/html.png" />
        <img src="/imagens/css.png" />
        <img src="/imagens/javascript.png" />
        <img src="/imagens/reactjs.png" />
        <img src="/imagens/nextjs.png" />
        <img src="/imagens/git.png" />
        <img src="/imagens/styled-components.png" />
        <img src="/imagens/sass.png" />
      </Carousel>
    </StyledDiv>
  );
};

export default Conhecimento;
