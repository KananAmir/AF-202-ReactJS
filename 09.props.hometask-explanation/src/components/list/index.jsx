import React from "react";
import ListItem from "../list-item";

const List = ({ users }) => {
  return (
    <div>
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </thead>

        <tbody>
          {users?.map((user) => (
            <ListItem user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
