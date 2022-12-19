import React from "react";

const CardComponent = ({ skills, sayHi, userName }) => {
  // console.log(skills);

  return (
    <div>
      {/* { sayHi()} */}
      <ul>
        {skills.map((element, index, array) => (
          <li key={index}>
            {index} - {element}
          </li>
        ))}
      </ul>

      <button onClick={() => sayHi(userName)}>Click</button>
    </div>
  );
};

export default CardComponent;
