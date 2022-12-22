import "./App.scss";
import Header from "./layouts";
import HomePage from "./pages/home-page";
import Routing from "./routing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
