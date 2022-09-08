import "./App.css";
import Convertor from "./Convertor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title d-flex justify-content-start ">
          <a href="/#" target="_blank" alt="" className="m-2 bd-highlight">
            Конвертер валют
          </a>
        </div>
        <nav>
          <div className="d-flex justify-content-center">
            <ul className="navL">
              <ol>1 UAN = 37,313 USD</ol>
              <ol>1 UAN = 37,453 EUR</ol>
            </ul>
          </div>
        </nav>
      </header>
      <div className="convertor">
        <Convertor />
        <div className="equals">=</div>
        <Convertor />
      </div>
    </div>
  );
}

export default App;
