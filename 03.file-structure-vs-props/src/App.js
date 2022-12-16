import "./App.scss";
import Card from "./components/card";
import ParentComp from "./components/parent";
import Footer from "./layouts/footer";
import Header from "./layouts/header";

function App() {
  let groupName = "AF202";
  let result = 85;

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header group={groupName} result={result} />
      <Card />
      <hr />
      <Footer result={result} />

      {/* <ParentComp /> */}
    </div>
  );
}

export default App;
