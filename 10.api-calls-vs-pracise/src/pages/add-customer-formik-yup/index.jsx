import { useFormik } from "formik";
import React from "react";
import { addNewCustomer } from "../../services/customers.service";
import { customerValidationSchema } from "./schema";

const AddCustomerFormikYup = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        companyName: "",
        phone: "",
        city: "",
        country: "",
      },
      validationSchema: customerValidationSchema,
      onSubmit: (values) => {
        let customerObj = {
          companyName: values.companyName,
          address: {
            city: values.city,
            country: values.country,
            phone: values.phone,
          },
        };
        addNewCustomer(customerObj);
        resetForm();
      },
    });

  return (
    <div>
      <form id="product-form" onSubmit={handleSubmit}>
        {console.log("error", errors)} {console.log("error", errors)}{" "}
        <label htmlFor="companyName" className="m-2">
          Company Name
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          onChange={handleChange}
          value={values.companyName}
        />
        <br />
        {errors.companyName && touched.companyName && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.companyName}
          </span>
        )}
        <br />
        <label htmlFor="country" className="m-2">
          Country
        </label>
        <input
          id="country"
          name="country"
          type="text"
          onChange={handleChange}
          value={values.country}
        />
        <br />
        {errors.country && touched.country && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.country}
          </span>
        )}
        <br />
        <label htmlFor="city" className="m-2">
          City
        </label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={handleChange}
          value={values.city}
        />
        <br />
        {errors.city && touched.city && (
          <span style={{ color: "red", fontSize: "16px" }}>{errors.city}</span>
        )}
        <br />
        <label htmlFor="phone" className="m-2">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={handleChange}
          value={values.phone}
        />
        <br />
        {errors.phone && touched.phone && (
          <span style={{ color: "red", fontSize: "16px" }}>{errors.phone}</span>
        )}
        <br />
        <button type="submit" className="btn btn-success mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCustomerFormikYup;
