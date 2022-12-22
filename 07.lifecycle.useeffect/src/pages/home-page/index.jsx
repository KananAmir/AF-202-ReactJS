import React, { useEffect, useState } from "react";
import Card from "../../components/card";

const HomePage = () => {
  const [suppliers, setSuppliers] = useState([]);

  const [status, setStatus] = useState(false);
  const getSuppliers = () => {
    let url = "https://northwind.vercel.app/api/customers";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSuppliers(data));
  };

  useEffect(() => {
    getSuppliers();
    // getSuppliers().then((a) => console.log(a));
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setStatus(true);
          console.log(suppliers);
        }}
      >
        mount
      </button>
      <button onClick={() => setStatus(false)}>unmount</button>
      {status && <Card />}
    </div>
  );
};

export default HomePage;
