import styled from "styled-components";
import config from "/config.json";

const StyledSobre = styled.section`
  background-color: #fff;
  max-width: 90%;
  margin: 0 auto 100px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  border-radius: 20px;
  padding: 30px 40px;
  text-align: justify;
  p {
    line-height: 40px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 480px) {
    p {
      font-size: 16px;
    }
  }
`;
function Sobre() {
  return (
    <StyledSobre>
      <p>{config.about}</p>
    </StyledSobre>
  );
}

export default Sobre;
