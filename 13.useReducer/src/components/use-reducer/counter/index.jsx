import React, { useReducer } from "react";

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_BY_3: "INCREMENT_BY_3",
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  INCREMENT_BY_INPUT: "INCREMENT_BY_INPUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actions.DECREMENT:
      return { count: state.count - 1 };
    case actions.INCREMENT_BY_3:
      return { count: state.count + action.payload };
    case actions.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case actions.INCREMENT_BY_INPUT:
      return { ...state, count: state.count + +action.payload };
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
  const handleIncrementBy3 = () => {
    dispatch({ type: "INCREMENT_BY_3", payload: 3 });
  };
  const handleByInputValue = () => {
    dispatch({ type: "INCREMENT_BY_INPUT", payload: state.inputValue });
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, inputValue: "" });
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      {state.count}
      <button onClick={handleDecrement}>Decrement</button>
      <input
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
        }
        type="text"
      />
      <button onClick={handleByInputValue}>Increment By Input Value</button>
      <button onClick={handleIncrementBy3}>Increment by 3</button>
    </div>
  );
};

export default CounterWithUseReducer;
