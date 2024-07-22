import "./App.css";
import { useState } from "react";
function App() {
  const [Counter, setCounter] = useState(1);

  // let Counter = 15;

  const addvalue = () => {
    setCounter(Counter + 1);
  };
  const removeValue = () => {
    setCounter(Counter - 1);
  };
  // const mulValue = () => {
  //   setCounter(Counter *  2);
  // };
  // const subValue = () => {
  //   setCounter(Counter / 2);
  // };
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {Counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
