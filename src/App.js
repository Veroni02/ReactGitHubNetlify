import logo from "./logo.svg";
import "./App.css";
import Weather from "./component/Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
      </div>
    </div>
  );
}

export default App;
