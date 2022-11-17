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
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
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
          <StyledItem>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </StyledItem>
        );
      })}
    </StyledList>
  );
}

export default Card;
