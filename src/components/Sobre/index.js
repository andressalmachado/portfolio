import styled from "styled-components";
import config from "/config.json";

const StyledSobre = styled.section`
  background-color: #fff;
  max-width: 90%;
  margin: 0 auto;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: justify;
  p {
    line-height: 40px;
    font-size: 20px;
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
