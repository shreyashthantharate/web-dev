import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);
  // let value = 5;

  const increase = () => {
    setValue(value + 1);
    console.log(value);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <>
      <div>
        <h1>Value: {value}</h1>
        <button onClick={increase}>+</button> <span> </span>
        <button onClick={decrease}>-</button>
      </div>
    </>
  );
}

export default App;
