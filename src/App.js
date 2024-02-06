import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [first, setFirst] = useState(1);
  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setFirst(newVolume);
  };

  let [countVariable, setCountVariable] = useState("");
  function incrementCount() {
    setCountVariable(Number((countVariable += first)));
  }
  function decrementCount() {
    setCountVariable((countVariable -= first));
  }

  const date = new Date();
  date.setDate(date.getDate() + countVariable);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setCountVariable(+(value + 0));
  };
  const convertToString = () => {
    setCountVariable(countVariable);
  };
  function resetValues() {
    setCountVariable("");
    setFirst(1);
  }
  return (
    <>
      <div className="App">
        <div className="App-header1">
          <div className="ano">
            <div className="stepsDiv">
              <input
                type="range"
                name=""
                id=""
                min={0}
                max={10}
                value={first}
                onChange={handleVolumeChange}
                className="rangeIn"
              />
              <h1>{first}</h1>
            </div>
          </div>
          <div>
            <button className="org" onClick={decrementCount}>
              -
            </button>
            <input
              type="number"
              value={countVariable}
              onClick={convertToString}
              onChange={handleChange}
            />
            <button
              className="org"
              onClick={incrementCount}
              // onChange={handleChange}
            >
              +
            </button>
          </div>
          <h2>
            {countVariable === " " ||
            countVariable === 0 ||
            isNaN(countVariable)
              ? `Today is ${date.toDateString()}`
              : countVariable < 0
              ? `${Math.abs(countVariable)} days ago was ${date.toDateString()}`
              : `${countVariable} days from today is ${date.toDateString()}`}
          </h2>
          <div>
            {countVariable === "" && first === 1 ? null : (
              <button className="resetBtn" onClick={resetValues}>
                Reset
              </button>
            )}
          </div>
        </div>
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;
