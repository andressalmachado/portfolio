import styled from "styled-components";

const StyledSeparador = styled.fieldset`
  border: none;
  border-top: 1px solid #b370b0;
  display: block;
  text-align: center;
  color: #222222;
  letter-spacing: 3px;
  font-weight: 600;
  margin: 20px 100px;

  legend {
    padding: 25px 50px;
    font-size: 24px;
  }

  @media (max-width: 1024px) {
    legend {
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    legend {
      font-size: 18px;
    }
  }
  @media (max-width: 480px) {
    font-weight: 400;
    letter-spacing: 2px;
    margin: 20px 10px;

    legend {
      padding: 10px 20px;

      font-size: 16px;
    }
  }
`;

const Separador = (props) => {
  return (
    <StyledSeparador id={props.id}>
      <legend>{props.text}</legend>
    </StyledSeparador>
  );
};

export default Separador;
