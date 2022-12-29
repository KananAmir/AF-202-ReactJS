import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
function App() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/suppliers")
      .then((response) => setSuppliers(response.data));
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: (a, b) => (a.companyName > b.companyName ? 1 : -1),
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: "Adress",
      dataIndex: "address",
      render: (element, data, i) => `${element.city}, ${element.country}`,
    },
  ];

  return (
    <div className="App">
      {/* {console.log(suppliers)} */}
      <Table
        columns={columns}
        dataSource={suppliers}
        pagination={{
          pageSize: 12,
        }}
      />
    </div>
  );
}

export default App;
