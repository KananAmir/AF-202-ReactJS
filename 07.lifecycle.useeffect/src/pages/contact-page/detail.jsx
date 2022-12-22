import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSupplierById } from "../../services/apiCall";
const Detail = () => {
  const [supplier, setSupplier] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();
  const navigate = useNavigate();

  const getSupplier = async () => {
    setSupplier(await getSupplierById(id));
    setIsLoading(false);
  };

  useEffect(() => {
    getSupplier();
    // eslint-disable-next-line
  }, []);
  return (
    <div id="supplier-detail" className="text-center p-12">
      <p>{supplier?.contactTitle}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Detail;
