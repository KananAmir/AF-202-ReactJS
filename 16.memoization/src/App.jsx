import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/card";
import { useMemo } from "react";
import Button from "./components/button";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  // const [text, setText] = useState("Hello World");
  const [inputValue, setInputValue] = useState("");

  // computation expensive calcualtions

  const double = useMemo(() => {
    [...new Array(10000000)].map(() => {});
    return count * 2;
  }, [count]);

  // const double = handleDouble();

  //referential equality
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <p>Count: {count}</p>
      <Button handleIncrement={handleIncrement} />
      <p>Double Count: {double}</p>
      {/* <hr />
      <Card text={text} />
      <button onClick={() => setText("Salam")}>Change Text</button> */}

      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
    </div>
  );
}

export default App;
