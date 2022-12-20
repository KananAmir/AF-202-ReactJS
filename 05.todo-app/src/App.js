import "./App.scss";
import ParentComp from "./components/forward-ref/parent-comp";
import InputComp from "./components/ref";
import TodoApp from "./components/todo";

function App() {
  return (
    <div className="App">
      {/* <InputComp /> */}
      {/* <ParentComp /> */}
      <TodoApp />
    </div>
  );
}

export default App;
