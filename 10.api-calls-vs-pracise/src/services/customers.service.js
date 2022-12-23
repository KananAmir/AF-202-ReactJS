import axios from "axios";
const BASE_URL = "https://northwind.vercel.app/api/";

export const getAllCustomers = async () => {
  try {
    let response = await axios.get(`${BASE_URL}customers`);
    return response.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
export const getCustomerById = async (id) => {
  try {
    let response = await axios.get(`${BASE_URL}customers/${id}`);
    return response.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const deleteCustomerById = async (id) => {
  try {
    await axios.delete(`${BASE_URL}customers/${id}`);
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
export const addNewCustomer = async (obj) => {
  try {
    let response = await axios.post(`${BASE_URL}customers`, obj);
    return response.data;
  } catch (error) {
    throw error;
  }
};
