import React from "react";
import { useParams } from "react-router-dom";

const CustomersDetailPage = () => {
  let params = useParams();
  return (
    <>
      <div>Detail Page</div>
      <button onClick={() => console.log(params.id)}>Click</button>
    </>
  );
};

export default CustomersDetailPage;
