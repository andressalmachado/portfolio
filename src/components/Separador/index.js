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
`;

const Separador = (props) => {
  return (
    <StyledSeparador>
      <legend>{props.text}</legend>
    </StyledSeparador>
  );
};

export default Separador;
