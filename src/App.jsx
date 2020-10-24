import "./App.css";
import dataset from "./dataset.json";
const sampleData = dataset.slice(0, 5);

function App() {
  return (
    <div className="App">
      <h1>habemus app</h1>

      <p>algum jeito de representar cartas [todo: import csv]</p>

      <button>
        se clicar aqui, algumas [tipo, três] vão pra essa lista aqui
      </button>

      <h2>samples:</h2>

      <ul>
        {sampleData.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>

      <h2>cartas escolhidas:</h2>
      <ul>
        <li>nome da carta</li>
        <li>nome da outra carta</li>
        <li>terceira carta</li>
      </ul>
    </div>
  );
}

export default App;
