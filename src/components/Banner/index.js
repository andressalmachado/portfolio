import styled from "styled-components";
import RedesSociais from "./components/RedesSociais";
import config from "/config.json";

// #C3C3E6
// #D1C8E1
// #BBA0CA
// #B370B0
// #87255B

const StyledBanner = styled.header`
  padding: 0 50px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    margin-top: 64px;
    p {
      font-size: 32px;
    }
    h1 {
      font-size: 64px;
      font-family: "Koulen";
      text-transform: uppercase;
      margin-top: 20px;
      color: #87255b;
      letter-spacing: 0.06em;
    }
    h2 {
      font-size: 24px;
      color: #222222;
    }
  }

  img {
    max-width: 100%;
    height: 600px;
    border-radius: 20px;
  }

  @media (max-width: 1280px) {
    div {
      p {
        font-size: 28px;
      }
      h1 {
        font-size: 48px;
      }
      h2 {
        font-size: 20px;
      }
    }
    img {
      height: 400px;
    }
  }

  @media (max-width: 1024px) {
    div {
      p {
        font-size: 26px;
      }
      h1 {
        font-size: 36px;
      }
    }
    img {
      height: 350px;
    }
  }

  @media (max-width: 900px) {
    div {
      p {
        font-size: 20px;
      }
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 18px;
      }
    }
    img {
      height: 300px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    div {
      p {
        margin-top: 20px;
      }
      h1,
      h2 {
        text-align: center;
      }
    }
  }

  @media (max-width: 480px) {
    div {
      p {
        font-size: 18px;
      }
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 16px;
      }
    }
    img {
      height: 270px;
    }
  }
`;

const Banner = () => {
  return (
    <StyledBanner id="home">
      <div>
        <p>Boas vindas ao meu portfólio!</p>
        <h1>{config.name}</h1>
        <h2>{config.job}</h2>
        <RedesSociais />
      </div>

      <img src="/imagens/banner.jpg" />
    </StyledBanner>
  );
};

export default Banner;
