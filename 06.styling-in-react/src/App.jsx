import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Mzah from "./assets/izah";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Card />
      <Mzah />
      <hr />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
