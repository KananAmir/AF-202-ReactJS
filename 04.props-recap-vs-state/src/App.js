import "./App.scss";
import CardComponent from "./components/card";
import { useState } from "react";

import { users } from "./data/data";
import User from "./components/users";
import ParentComp from "./components/parent";
import Increment from "./components/increment";
import Decrement from "./components/decrement";

function App() {
  // let skills = ["html", "css", "js"];
  // let userName = "Jhon Doe";
  // const sayHi = (userName) => {
  //   console.log(`hi ${userName}`);
  // };

  // const [fullName, setFullName] = useState("Jhon Doe");

  // const [show, setShow] = useState(true);

  // const [skills, setSkills] = useState([]);

  const [data, setData] = useState(users);
  const [count, setCount] = useState(0);

  // console.log(data);
  return (
    <div className="App">
      {/* {userName} */}

      {/* <CardComponent skills={skills} sayHi={sayHi} userName={userName}/> */}

      {/* {show && <h1>Full Name: {fullName}</h1>}

      <button
        onClick={() => {
          // setFullName("Fezile");
          show ? setShow(false) : setShow(true);
          setSkills([...skills, "Aladdin", "Ceyhun"]);
        }}
      >
        Update Data
      </button>

      <button
        onClick={() => {
          // setFullName("Fezile");
          show ? setShow(false) : setShow(true);
          setSkills([...skills, "Sehriyar"]);
        }}
      >
        Update Data
      </button> */}

      <hr />

      {/* <User data={data} /> */}

      <hr />

      <ParentComp data={data} />

      <hr />

      <Increment count={count} setCount={setCount}/>
      {count}
      <Decrement count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
