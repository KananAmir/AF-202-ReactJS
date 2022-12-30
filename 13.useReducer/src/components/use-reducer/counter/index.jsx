import React, { useReducer } from "react";

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actions.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterWithUseReducer = () => {
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      {state.count}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterWithUseReducer;
