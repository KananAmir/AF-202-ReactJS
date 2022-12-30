import "./App.css";
import Counter from "./components/counter";
import TodoApp from "./components/use-reducer/todo";
import CounterWithUseReducer from "./components/use-reducer/counter";
import TodoAppWithUseReducer from "./components/use-reducer/todo";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterWithUseReducer /> */}

      {/* <TodoApp /> */}
      <TodoAppWithUseReducer />
    </div>
  );
}

export default App;
