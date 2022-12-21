import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <div>
      <Button>Click</Button>

      <Parag>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, commodi
        quibusdam sint quam nostrum ut aliquam obcaecati repellat quis eligendi
        perspiciatis, similique distinctio ullam quo itaque odio laudantium
        excepturi quasi!
      </Parag>
    </div>
  );
};

export default Card;

const Button = styled.button`
  color: limegreen;
  border: 2px solid limegreen;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;
const Parag = styled.p`
  color: red;
  font-size: 36px;
`;
