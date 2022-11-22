import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 0;
`;

const StyledItem = styled.li`
  margin: 20px;
  width: 350px;
  height: 230px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.5s;

  h2 {
    text-align: center;
    padding: 10px 0;
    color: #87255b;
    transition: 1s;
  }

  p {
    padding: 20px 10px;
    font-size: 18px;
    text-align: justify;
    line-height: 25px;
    transition: 1s;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 300px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
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
