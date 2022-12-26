import { Button, notification } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner";
import { message, Popconfirm } from "antd";
import { Helmet } from "react-helmet";

import {
  deleteCustomerById,
  getAllCustomers,
} from "../../services/customers.service";
import "./index.scss";
const CustomerList = ({ favorites, setFavorites }) => {
  const [customers, setCustomers] = useState([]);
  const [isLoaoding, setIsLoaoding] = useState(true);

  // useEffect(() => {
  //   fetch("https://northwind.vercel.app/api/customers")
  //     .then((response) => response.json())
  //     .then((data) => setCustomers(data));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://northwind.vercel.app/api/customers")
  //     .then((data) => setCustomers(data.data));
  // }, []);

  const getData = async () => {
    setCustomers(await getAllCustomers());
    setIsLoaoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    let updatedCustomers = customers.filter((el) => el.id !== id);
    setCustomers(updatedCustomers);
    deleteCustomerById(id);
  };

  const handleAddToFavorites = (obj) => {
    if (!favorites.find((el) => el.id === obj.id)) {
      setFavorites([...favorites, obj]);
      console.log(favorites);

      openNotification();
    } else {
      alert("Bele bir customer var");
    }
  };

  const confirm = (id) => {
    handleDelete(id);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const openNotification = () => {
    notification.open({
      message: "Info",
      description: "Added to favorites succesfully!!",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <div id="customer-list">
      <Helmet>
        <title>Customers Page</title>
        <meta charSet="utf-8" />
        <meta description="this is customers list page" />
      </Helmet>
      {isLoaoding ? (
        <Spinner />
      ) : (
        <table>
          <thead>
            <th>ID</th>
            <th>COMPANY NAME</th>
            <th>PHONE</th>
            <th>CITY, COUNTRY</th>
            <th>DELETE</th>
            <th>Add to Favorites</th>
            <th>Details</th>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.companyName}</td>
                  <td>{customer.address?.phone}</td>
                  <td>
                    {customer.address?.city}, {customer.address?.country}
                  </td>
                  <td>
                    <Popconfirm
                      title="Delete Customer?"
                      description="Are you sure to delete this task?"
                      onConfirm={() => confirm(customer.id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        type="primary"
                        danger
                        // onClick={() => handleDelete(customer.id)}
                      >
                        Delete
                      </Button>
                    </Popconfirm>
                  </td>
                  <td>
                    <Button
                      disabled={
                        favorites.find((el) => el.id === customer.id)
                          ? true
                          : false
                      }
                      // className={
                      //   favorites.find((el) => el.id === customer.id)
                      //     ? "added-already"
                      //     : "add-to-favorite"
                      // }
                      type="primary"
                      ghost
                      onClick={() => handleAddToFavorites(customer)}
                    >
                      {!favorites.find((el) => el.id === customer.id)
                        ? "Add to Favorites"
                        : "Added Already"}
                    </Button>
                  </td>
                  <td>
                    <Link to={customer.id}>Details</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerList;
