import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #695c85;
  margin-top: 50px;

  p {
    color: #fff;
    padding-top: 20px;
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: 900px) {
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 14px;
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>Desenvolvido por Andressa L. Machado</p>;
    </StyledFooter>
  );
};

export default Footer;
