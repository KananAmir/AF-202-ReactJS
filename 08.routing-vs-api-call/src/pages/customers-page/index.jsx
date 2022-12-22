import React from "react";
import { useNavigate } from "react-router-dom";

const CustomersPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>CustomersPage</h1>

      <button onClick={() => navigate("/")}>Click to Back</button>
    </div>
  );
};

export default CustomersPage;
