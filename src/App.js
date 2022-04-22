import React from "react";
import Button from "./components/Button";
import Triangle from "./components/Triangle";
import List from "./components/List";

const App = () => {
  return (
    <div className="App">
      <Triangle />
      <Button />
      {false && <Triangle />}
      {false && <List />}
    </div>
  );
}

export default App;
