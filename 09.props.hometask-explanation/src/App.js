import List from "./components/list";
import "./App.scss";
// import { users } from "./data/index.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const BASE_URL = "https://jsonplaceholder.typicode.com/";
    axios.get(`${BASE_URL}users`).then((q) => setUsers(q.data));
  }, []);

  return (
    <div className="App">
      <List users={users} />
    </div>
  );
}

export default App;
