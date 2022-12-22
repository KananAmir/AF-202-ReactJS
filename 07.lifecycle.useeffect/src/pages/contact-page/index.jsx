import React, { useEffect, useState } from "react";
import {
  deleteSupplierById,
  getSupplierById,
  getSuppliers,
} from "../../services/apiCall";
import { Button, Space, Spin } from "antd";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [data, setData] = useState([]);
  const [supplier, setSupplier] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setData(await getSuppliers());
    setIsLoading(false);
  };
  useEffect(() => {
    // getSuppliers().then((data) => setData(data));
    getData();
  }, [supplier]);

  const handleDelete = async (id) => {
    await deleteSupplierById(id).then(() => getData());
    console.log(supplier);
  };

  return (
    <div>
      {isLoading ? (
        <div id="spinner">
          <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
          </thead>
          <tbody>
            {data.map((q) => (
              <tr key={q.id}>
                <td>{q.companyName}</td>
                <td>{q.companyName}</td>
                <td>{q.companyName}</td>
                <td>
                  <Link to={q.id}>Link</Link>
                </td>
                <td>
                  <Button onClick={() => handleDelete(q.id)} danger>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactPage;
