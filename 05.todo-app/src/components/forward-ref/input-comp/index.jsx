import React, { forwardRef } from "react";

const InputComponent = forwardRef((props, ref) => {
  return <input ref={ref} type="text" id="my-input" />;
});

export default InputComponent;
