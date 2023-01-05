import { useContext, useState } from "react";
import "./App.scss";
import Card from "./components/card";
import Users from "./components/users";
import Footer from "./layouts/footer";
import Header from "./layouts/header";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Users />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
