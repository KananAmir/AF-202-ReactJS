import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../../context/modeContext";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const { users, setUsers } = useContext(ModeContext);
  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      await setUsers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading ....</h1>
      ) : (
        users?.map((q) => {
          return <p key={q.id}>{q.name}</p>;
        })
      )}
    </div>
  );
};

export default Users;
