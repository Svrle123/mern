import React from "react";
import Triangle from "./components/Triangle";
import List from "./components/List";

const drawData = [
  {
    x: 117,
    y: 23,
  },
  {
    x: 125,
    y: 73,
  },
  {
    x: 12,
    y: 22,
  },
  {
    x: 123,
    y: 211,
  },
  {
    x: 57,
    y: 192,
  },
  {
    x: 23,
    y: 11,
  },
]


const App = () => {
  return (
    <div className="App">
      <Triangle isSelectTriangle />
      <Triangle drawData={drawData} />
      {false && <List />}
    </div>
  );
}

export default App;
