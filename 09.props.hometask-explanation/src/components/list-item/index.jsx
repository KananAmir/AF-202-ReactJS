import React from "react";

const ListItem = ({ user }) => {
  // console.log(user);
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
};
export default ListItem;
