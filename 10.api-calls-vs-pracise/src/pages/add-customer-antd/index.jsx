import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./index.scss";
import { addNewCustomer } from "../../services/customers.service";

const AddCustomerAntd = () => {
  const onFinish = (values) => {
    console.log(values);
    let customerObj = {
      companyName: values.companyName,
      address: {
        city: values.city,
        country: values.country,
        phone: values.phone,
      },
    };

    addNewCustomer(customerObj);
    // console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div id="add-customer">
      <Form
        name="customer"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[
            {
              required: true,
              message: "Please input your company name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your city!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[
            {
              required: true,
              message: "Please input your country!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCustomerAntd;
