import "./App.css";
import Table from "./components/Table"

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>The Poker Solver</h1>
        <h2>Choose 5 cards</h2>
      </header>
      <Table/>
    </div>
  );
}

export default App;
