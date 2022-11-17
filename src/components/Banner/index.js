import styled from "styled-components";
import RedesSociais from "./components/RedesSociais";
import config from "/config.json";

const StyledBanner = styled.header`
  padding: 50px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    p {
      font-size: 24px;
    }
    h1 {
      font-size: 48px;
      font-family: "Koulen";
      text-transform: uppercase;
      margin-top: 20px;
      color: #502955;
      letter-spacing: 0.06em;
    }
    h2 {
      font-size: 20px;
    }
  }

  img {
    max-width: 100%;
    height: 300px;
    border-radius: 40px;
  }
`;

function Banner() {
  return (
    <StyledBanner>
      <div>
        <p>Boas vindas ao meu portfólio</p>
        <h1>{config.name}</h1>
        <h2>{config.job}</h2>
        <RedesSociais />
      </div>
      <img src="/imagens/temp.jpg" />
    </StyledBanner>
  );
}

export default Banner;
