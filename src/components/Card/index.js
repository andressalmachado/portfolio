import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  width: 350px;
  height: 340px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  transition: 0.5s;

  h2 {
    text-align: center;
    padding: 10px 0;
    color: #87255b;
  }

  p {
    padding: 20px 10px;
    font-size: 18px;
    text-align: justify;
    line-height: 25px;
  }
  a {
    text-align: right;
    color: #87255b;
    font-weight: 700;

    &:hover {
      transform: translateY(-3px);
      transition: 0.5s;
    }
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

const Card = () => {
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
            <a
              href={item.html_url}
              target="_blank"
              class="material-symbols-outlined"
              title="Abra o projeto completo no github"
            >
              arrow_forward
            </a>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default Card;
