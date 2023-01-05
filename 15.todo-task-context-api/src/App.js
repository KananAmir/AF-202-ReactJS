import './App.css'
import Routing from './routing/index';
import Header from './layout/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
