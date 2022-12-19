import React from "react";

const ChildComp = ({ text = "Hello World", data, tranferFunc }) => {
  console.log(data);

  let userInfo = "Gunel Aliyeva";
  
  return <div>
    <button onClick={() => tranferFunc(userInfo)}>Click</button>

  </div>;
};

export default ChildComp;
