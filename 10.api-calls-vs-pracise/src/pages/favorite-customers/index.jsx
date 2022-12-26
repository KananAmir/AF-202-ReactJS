import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { message, Popconfirm } from "antd";
import "./index.scss";

const FavoriteCustomers = ({ favorites, setFavorites }) => {
  const handleRemove = (id) => {
    let newFavorites = favorites.filter((el) => el.id !== id);
    setFavorites(newFavorites);
  };

  const confirm = (id) => {
    handleRemove(id);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <div id="favorites-list">
      <Button
        danger
        onClick={() => {
          setFavorites([]);
        }}
      >
        Remove All Customers
      </Button>
      <br />
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
          {favorites.map((customer) => {
            return (
              <tr>
                <td>{customer.id}</td>
                <td>{customer.companyName}</td>
                <td>{customer.address.phone}</td>
                <td>
                  {customer.address.city}, {customer.address.country}
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
                      ghost
                      // onClick={() => handleRemove(customer.id)}
                    >
                      Remove
                    </Button>
                  </Popconfirm>
                </td>
                <td>
                  <Link to={customer.id}>Details</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteCustomers;
