import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById } from "../../services/customers.service";

const CustomerDetail = () => {
  const [customers, setCustomers] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    setCustomers(await getCustomerById(id));
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ul>
        <li>ID: {customers.id}</li>
        <li>Company Name: {customers.companyName}</li>
        <li>
          Adress: {customers.address?.city}, {customers.address?.country}
        </li>
      </ul>
      <Button type="primary" ghost danger onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <Button type="primary" ghost danger onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </>
  );
};

export default CustomerDetail;
