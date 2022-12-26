import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/orders")
      .then((res) => setOrders(res.data));
  }, []);

  const handleChange = (e) => {
    axios.get("https://northwind.vercel.app/api/orders").then((res) => {
      let newOrders = res.data.filter((order) =>
        order.shipName.includes(e.target.value)
      );
      setOrders(newOrders);
    });
  };
  return (
    <div className="App">
      <input type="text" onChange={(e) => handleChange(e)} />

      {console.log(orders)}
      <table>
        <thead>
          <th>id</th>
          <th>shipName</th>
          <th>freight</th>
        </thead>
        <tbody>
          {orders.map((q) => {
            return (
              <tr>
                <td>{q.id}</td>
                <td>{q.shipName}</td>
                <td>{q.freight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
