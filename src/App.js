import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  return (
  <>
    <Counter counter={counter} setCounter={setCounter} />
  </>
  );
}

export default App;