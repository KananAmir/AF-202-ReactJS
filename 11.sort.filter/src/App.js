import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "antd";

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

  const handleSortByShipnameAscending = () => {
    // setOrders(
    //   orders.sort((a, b) => (a.shipName > b.shipName ? 1 : -1)).slice()
    // );
    // setOrders([...orders.sort((a, b) => (a.shipName > b.shipName ? 1 : -1))]);

    setOrders([...orders.sort((a, b) => a.shipName.localeCompare(b.shipName))]);
  };
  const handleSortByShipnameDescending = () => {
    // setOrders([...orders.sort((a, b) => (b.shipName > a.shipName ? 1 : -1))]);
    setOrders([...orders.sort((a, b) => b.shipName.localeCompare(a.shipName))]);

  };

  const handleSortByFreightAscending = () => {
    setOrders([...orders.sort((a, b) => a.freight - b.freight)]);
  };

  const handleSortByFreightDescending = () => {
    setOrders([...orders.sort((a, b) => b.freight - a.freight)]);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => handleChange(e)} />

      <br />
      <br />
      <Button onClick={handleSortByShipnameAscending}>
        Sort by ShipName - asc
      </Button>
      <Button onClick={handleSortByShipnameDescending}>
        Sort by ShipName - des
      </Button>
      <Button onClick={handleSortByFreightAscending}>
        Sort by Freight - asc
      </Button>
      <Button onClick={handleSortByFreightDescending}>
        Sort by Freight - des
      </Button>
      <br />
      <br />
      <table>
        <thead>
          <th>id</th>
          <th>Ship Name</th>
          <th>Freight</th>
        </thead>
        <tbody>
          {orders.map((q) => {
            return (
              <tr key={q.id}>
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
