import logo from './logo.svg';
import './App.css';
import ReactMainBlock from "./components/ReactMainBlock";

function App() {
  return (
    <div className="App">
      <div className={`container`}>
        <div className={`App-wrapper`}>
            <ReactMainBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
