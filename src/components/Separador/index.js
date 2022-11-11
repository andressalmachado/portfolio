import styled from "styled-components";

const StyledSeparador = styled.fieldset`
  border: none;
  border-top: 1px solid #aab4d8;
  display: block;
  text-align: center;
  color: #000;
  letter-spacing: 3px;
  font-weight: 600;
  margin: 0 100px;

  legend {
    padding: 25px 50px;
    font-size: 20px;
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
