import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledItem = styled.li`
  background-color: #fff;
  margin: 20px;
  height: 280px;
  width: 350px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  h2 {
    text-align: center;
    padding: 10px 0;
    color: #502955;
    letter-spacing: 2px;
  }
  p {
    padding: 20px 10px;
    font-size: 18px;
    text-align: justify;
    line-height: 25px;
  }
`;

function Card() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/andressalmachado/repos")
      .then((response) => response.json())
      .then(setRepositories);
  }, []);

  return (
    <StyledList>
      {repositories.map((item) => {
        return (
          <StyledItem key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </StyledItem>
        );
      })}
    </StyledList>
  );
}

export default Card;
