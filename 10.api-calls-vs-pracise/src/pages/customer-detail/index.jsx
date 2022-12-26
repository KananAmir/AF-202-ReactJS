import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById } from "../../services/customers.service";
import { Helmet } from "react-helmet";

const CustomerDetail = () => {
  const [customer, setCustomer] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    setCustomer(await getCustomerById(id));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{customer.companyName}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={customer.address?.city + ", " + customer.address?.country}
        />
      </Helmet>
      <ul>
        <li>ID: {customer.id}</li>
        <li>Company Name: {customer.companyName}</li>
        <li>
          Adress: {customer.address?.city}, {customer.address?.country}
        </li>
      </ul>
      <Button type="primary" ghost danger onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <Button type="primary" ghost danger onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </>
  );
};

export default CustomerDetail;
