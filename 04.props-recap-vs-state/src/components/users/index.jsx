import React from "react";
import { uid } from "uid";

const User = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      {data.map((element, index) => {
        return (
          <div key={uid()}>
            {/* {console.log(uid(20))} */}
            <h5>User Name: {element.name}</h5>
            <p>User Email: {element.email}</p>
            <p>User Email: {element.email}</p>
            <a href={element.website}>{element.website}</a>
          </div>
        );
      })}
    </div>
  );
};

export default User;
