import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let username = {
    name: "mubeen",
    age: 24,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="mubeen" btnText="click me"/>
      <Card username="noor ul mobin" btnText="visit me" />
    </>
  );
}

export default App;
