import axios from "axios";

export const BASE_URL = "https://northwind.vercel.app/api/";

// export const getData = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// };

export const getSuppliers = async () => {
  try {
    let response = await axios(BASE_URL + "customers");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addSupplier = async (obj) => {
  try {
    let response = await axios.post(BASE_URL + "customers", obj);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSupplierById = async (id) => {
  try {
    let response = await axios(`${BASE_URL + "customers"}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSupplierById = async (id) => {
  try {
    let response = await axios.delete(`${BASE_URL + "customers"}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
